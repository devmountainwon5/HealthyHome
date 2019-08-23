import React, { useEffect, useState, useCallback } from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import axios from "axios"
import * as Action from "../../Ducks/action_creator"
import "./Profile.css"

function Profile({
	user: { first_name: firstname, last_name: lastname, email, phone_num: phone, user_id: id },
	address: { address_line_1, city, state, zip },
	setAddress
}) {
	// const [ID, setID] = useState(id)
	const [edit, setedit] = useState(false)
	const [fName, setfName] = useState(firstname)
	const [lName, setlName] = useState(lastname)
	const [num, setnum] = useState(phone)
	const reset = useCallback(() => {
		setfName(firstname)
		setlName(lastname)
		setnum(phone)
	}, [firstname, lastname, phone])
	const updateInfo = (first, last, number) => {
		axios.post("/auth/change", { first, last, number, id })
	}

	useEffect(() => {
		axios.post("/auth/info", { user_id: id }).then(({ data }) => {
			setAddress(data)
		})
	}, [id, setAddress])

	useEffect(() => {
		reset()
	}, [edit, reset])

	return (
		<div className='profile'>
			{!edit && (
				<>
					<NavBar activeComponent='Profile' />
					<div className='profile-center'>
						<h1>User Information</h1>
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
				</>
			)}
			{edit && (
				<>
					<NavBar activeComponent='Profile' />
					<div className='profile-center'>
						First Name:
						<input autoComplete='on' type='text' value={fName} onChange={e => setfName(e.target.value)} />
						Last Name:
						<input autoComplete='on' type='text' value={lName} onChange={e => setlName(e.target.value)} />
						Phone Number:
						<input autoComplete='on' type='text' value={num} onChange={e => setnum(e.target.value)} />
						<div>
							<button
								onClick={() => {
									updateInfo(fName, lName, num)
									setedit(false)
								}}>
								Submit
							</button>
							<button onClick={() => setedit(false)}>Cancel</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default connect(
	state => state,
	Action
)(Profile)
