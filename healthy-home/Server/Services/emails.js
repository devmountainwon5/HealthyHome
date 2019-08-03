
const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT)

oauth2Client.setCredentials({
	refreshToken: process.env.REFRESH_TOKEN
})

const sendMail = async outgoing => {
	const tokens = await oauth2Client.refreshAccessToken()
	const accessToken = tokens.credentials.ACCESS_TOKEN

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: "OAuth2",
			user: process.env.nodeEmail,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.refreshToken,
			accessToken: accessToken
		}
    })
}

const mailOptions = {
    from: "healthyhomesapp@gmail.com",
    to: "nicklaus.roach@gmail.com", //process.env. who you send to 
    subject: "You have stuff to do",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};


smtpTransport.sendMail(mailOptions, (error, response) => {
     error ? console.log(error) : console.log(response);
     smtpTransport.close();
});

module.exports = sendMail
