const bcrypt = require("bcryptjs")
const saltRounds = 10

module.exports = {
    login: req => {
        const db = req.app.get('db');

        let { email, password } = req.body;
        email = email.toLowerCase();

        let catchUser = {};
        //  ;
        return db.users
            .findOne({ email })
            .then(user => {
                //  ;
                if (!user)
                    throw "No user associated with email";

                catchUser = user;
                return bcrypt.compare(password, user.password);
            })
            .then(isMatch => {
                if (!isMatch)
                    throw "Incorrect password";
                //  ;
                delete catchUser.password;

                req.session.user = {
                    firstName: catchUser.first_name,
                    lastName: catchUser.last_name,
                    email: catchUser.email,
                    phoneNum: catchUser.phone_num,
                    userId: catchUser.user_id
                };

                return {
                    success: true,
                    user: catchUser
                }
            })
            .catch(err => {
                //  ;
                return { success: false, msg: err };
            });
    },
    register: req => {
        const db = req.app.get('db');

        let { firstName, lastName, email, password, phoneNum,
            addressLine1, addressLine2, city, state, zip } = req.body;
        email = email.toLowerCase();

        return db.users
            .findOne({ email })
            .then(user => {
                if (user)
                    throw "User already exists";

                //  ;
                return bcrypt.hash(password, saltRounds);
            })
            .then(hash => {
                //  ;
                return db.users.insert({
                    first_name: firstName,
                    last_name: lastName,
                    email: lowerCaseEmail,
                    password: hash,
                    phone_num: phoneNum
                });
            })
            .then(user => {
                delete user.password;
                //  ;
                req.session.user = {
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    phoneNum: user.phone_num,
                    userId: user.user_id
                };

                return db.home_address.findOne({ user_id: user.user_id });
            })
            .then(address => {
                //  ;
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
                //  ;
                return {
                    success: true,
                    address,
                    user: {
                        firstName: req.session.user.firstName,
                        lastName: req.session.user.lastName
                    }
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
    },
    info: req =>{
        const db = req.app.get('db');

        const {address_line_1, address_line_2, city, state, zip, user_id}=req.body;

        return db.home_address
        .findOne({user_id})
            .then(address => {
                return address
            })
    },
    change: req => {
        const db = req.app.get("db");

        const { first, last, number, id } = req.body;

        return db.change_user_data({ id: id, fname: first, lname: last, num: number }).then(user => {
            return user
        });
    }

}
