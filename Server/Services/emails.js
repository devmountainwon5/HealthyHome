const nodemailer = require("nodemailer")
const ical = require("ical-generator")
const moment = require("moment")
require("dotenv").config()

const sendMail = async outgoing => {
	//create an ical event	
	const cal = ical()
	

	cal.createEvent({
		start: moment().add(Number(outgoing.frequency), "days"),
		end: moment().add(Number(outgoing.frequency), "days"),
		summary: outgoing.summary, //name of the event
		description: outgoing.description
	})

	const event = new Buffer.from(cal.toString())

	//transport the message
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			type: "OAuth2",
			user: process.env.EMAIL,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: process.env.ACCESS_TOKEN
		}
	})


	const mailOptions = {
		from: "healthyhomesapp@gmail.com",
		to: outgoing.email || process.env.SEND_TO,
		subject: "Healthy Home event",
		text: outgoing.text,
		alternatives: [
			{
				filename: "invite.ics",
				content: event,
				contentType: "text/calendar"
			}
		]
	}

	transporter.sendMail(mailOptions)

	return "ok"
}

module.exports = sendMail
