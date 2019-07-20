const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    login: req => {
        const db = req.app.get('db');

        const { email, password } = req.body;

        let catchUser = {};

        db.users
            .findOne({ email })
            .then(user => {
                if (!user)
                    throw "No user associated with email";

                catchUser = user;
                return bcrypt.compare(password, user.password);
            })
            .then(isMatch => {
                if (!isMatch)
                    throw "Incorrect password";

                delete catchUser.password;

                req.session.user = {
                    firstName: catchUser.first_name,
                    lastName: catchUser.last_name,
                    email: catchUser.email,
                    password: catchUser.password,
                    phoneNume: catchUser.phone_num
                };

                return {
                    success: true,
                    firstName: catchUser.first_name,
                    lastName: catchUser.last_name
                }
            })
            .catch(err => {
                return { success: false, msg: err }
            });
    },
    register: req => {
        const db = req.app.get('db');

        const { firstName, lastName, email, password, phoneNum } = req.body;

        db.users
            .findOne({ email })
            .then(user => {
                if (user)
                    throw "User already exists";

                return bcrypt.hash(password, saltRounds);
            })
            .then(hash => {
                return db.users.insert({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                    phone_num: phoneNum
                });
            })
            .then(user => {
                delete user.password;

                req.session.user = {
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    password: user.password,
                    phoneNume: user.phone_num
                };

                return {
                    success: true,
                    firstName: user.first_name,
                    lastName: user.last_name
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
            res.send({
                success: true,
                firstName: req.session.user.firstName,
                lastName: req.session.user.lastName
            })
        else
            res.send({ success: false, msg: "Not logged in" });
    }
}