const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const ical = require("ical-generator")
const moment = require("moment")
require("dotenv").config()

const sendMail = async outgoing => {
	//create an ical event	
	const cal = ical()
	cal.createEvent({
		start: moment(),
		end: moment().add(1, "days"),
		summary: "", //name of the event
		description: "this is the mound of dirty stoneware in your sink"
	})

	const event = new Buffer.from(cal.toString())

	//transport the message
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
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
		subject: "Here is your event invite",
		text: "come to my party",
		alternatives: [
			{
				filename: "invite.ics",
				content: event,
				contentType: "text/calendar"
			}
		]
	}

	let info = await transporter.sendMail(mailOptions)

	return "ok"
}

module.exports = sendMail
