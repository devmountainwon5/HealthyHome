const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2
require("dotenv").config()

const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT)

const sendMail = async outgoing => {

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
    port: 465,
		secure: true,
		auth: {
			type: "OAuth2",
			user: process.env.nodeEmail,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: process.env.ACCESS_TOKEN
		}
	})

	const mailOptions = {
		from: "healthyhomesapp@gmail.com",
		to: "bheadwhite@gmail.com", //process.env. who you send to
		subject: "You have stuff to do",
		generateTextFromHTML: true,
		html: "<b>test</b>"
	}

	let info = await transporter.sendMail(mailOptions)

	return 'ok'
}

module.exports = sendMail
