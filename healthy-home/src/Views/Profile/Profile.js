import React, {useEffect} from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import axios from 'axios';

function Profile(props) {

	useEffect(() => {
		// Auth: Is there a current user session?
		axios.get('/auth/me')
			.then((response) => {
				console.log(response.data.success)
				if(!response.data.success){
					props.history.push('/')
				}
			})
	})

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
