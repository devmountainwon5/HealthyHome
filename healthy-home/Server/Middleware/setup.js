const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(session(
        {
            name: 'e-comm',
            secret: process.env.SESSION_SECRET,
            cookie: {
                //days hours minutes seconds milseconds
                expires: 5 * 24 * 60 * 60 * 1000,
            },
            saveUninitialized: false,
            rolling: true,
            resave: false,
        }
    ));
}