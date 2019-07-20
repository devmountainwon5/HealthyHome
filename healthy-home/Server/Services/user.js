const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    login: req => {
        const db = req.app.get('db');

        const { email, password } = req.body;

        let catchUser = {};
        // debugger;
        return db.users
            .findOne({ email })
            .then(user => {
                // debugger;
                if (!user)
                    throw "No user associated with email";

                catchUser = user;
                return bcrypt.compare(password, user.password);
            })
            .then(isMatch => {
                if (!isMatch)
                    throw "Incorrect password";
                // debugger;
                delete catchUser.password;

                req.session.user = {
                    firstName: catchUser.first_name,
                    lastName: catchUser.last_name,
                    email: catchUser.email,
                    phoneNume: catchUser.phone_num,
                    userId: catchUser.user_id
                };

                return {
                    success: true,
                    firstName: catchUser.first_name,
                    lastName: catchUser.last_name
                }
            })
            .catch(err => {
                // debugger;
                return { success: false, msg: err };
            });
    },
    register: req => {
        const db = req.app.get('db');

        const { firstName, lastName, email, password, phoneNum,
            addressLine1, addressLine2, city, state, zip } = req.body;

        return db.users
            .findOne({ email })
            .then(user => {
                if (user)
                    throw "User already exists";

                // debugger;
                return bcrypt.hash(password, saltRounds);
            })
            .then(hash => {
                // debugger;
                return db.users.insert({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: hash,
                    phone_num: phoneNum
                });
            })
            .then(user => {
                delete user.password;
                // debugger;
                req.session.user = {
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    phoneNume: user.phone_num,
                    userId: user.user_id
                };

                return db.home_address.findOne({ user_id: user.user_id });
            })
            .then(address => {
                // debugger;
                if (address)
                    return db.home_address.update({ user_id: req.session.user.userId }, {
                        address_line_1: addressLine1,
                        address_line_2: addressLine2,
                        city,
                        state,
                        zip
                    });
                else
                    return db.home_address.insert({
                        user_id: req.session.user.userId,
                        address_line_1: addressLine1,
                        address_line_2: addressLine2,
                        city,
                        state,
                        zip
                    });
            })
            .then(address => {
                // debugger;
                return {
                    success: true,
                    firstName: req.session.user.first_name,
                    lastName: req.session.user.last_name
                }
            })
            .catch(err => {
                return { success: false, msg: err };
            });
    },
    logout: req => {
        req.session.destroy();
        return { success: true };
    },
    me: req => {
        if (req.session.user)
            return {
                success: true,
                firstName: req.session.user.firstName,
                lastName: req.session.user.lastName
            }
        else
            return { success: false, msg: "Not logged in" };
    }
}