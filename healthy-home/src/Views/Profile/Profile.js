import React from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"

function Profile(props) {
	const { first_name: firstname, last_name: lastname, email, phone_num: phone } = props.user
	const name = firstname + " " + lastname

	return (
		<div>
			<NavBar />
			<div>
				User Information First name: {name}
				Email: {email}
				Phone Number: {phone}
			</div>
			<div>contact us</div>
		</div>
	)
}

export default connect(state => state)(Profile)
