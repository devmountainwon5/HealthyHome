const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

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