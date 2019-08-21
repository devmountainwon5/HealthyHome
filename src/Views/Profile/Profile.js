import React, { useEffect, useState } from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import axios from "axios"
import * as Action from "../../Ducks/action_creator"

function Profile({
	user: { first_name: firstname, last_name: lastname, email, phone_num: phone, user_id: id },
	address: { address_line_1, city, state, zip },
	setAddress
}) {
	const [edit, setedit] = useState(false)
	const [fName, setfName] = useState(firstname)
	const [lName, setlName] = useState(lastname)
	const [num, setnum] = useState(phone)
	const reset = () => {
		setfName(firstname)
		setlName(lastname)
		setnum(phone)
	}
	const updateInfo = (first, last, number) => {
		axios.post("/change", { first, last, number })
	}

	useEffect(() => {
		axios.post("/auth/info", { user_id: id }).then(({ data }) => {
			console.log(data)
			setAddress(data)
		})
	}, [])

	useEffect(() => {
		reset()
	}, [edit])

	return (
		<div>
			{!edit && (
				<>
					<NavBar activeComponent='Profile' />
					<div>
						<p>User Information</p>
						<p>First name: {firstname}</p>
						<p>Last name: {lastname}</p>
						<p>Email: {email}</p>
						<p>Phone Number: {phone}</p>
						<p>Home Address: {address_line_1}</p>
						<p>Zip Code : {zip}</p>
						<p>City: {city}</p>
						<p>State: {state}</p>
						<button onClick={() => setedit(true)}>edit</button>
					</div>
					<div>contact us</div>
				</>
			)}
			{edit && (
				<>
					<NavBar activeComponent='Profile' />
					First Name:
					<input type='text' value={fName} onChange={e => setfName(e.target.value)} />
					Last Name:
					<input type='text' value={lName} onChange={e => setlName(e.target.value)} />
					Phone Number:
					<input type='text' value={num} onChange={e => setnum(e.target.value)} />
					<button
						onClick={() => {
							setedit(false)
							updateInfo(fName, lName, num)
						}}>
						Submit
					</button>
					<button onClick={() => setedit(false)}>Cancel</button>
				</>
			)}
		</div>
	)
}

export default connect(
	state => state,
	Action
)(Profile)
