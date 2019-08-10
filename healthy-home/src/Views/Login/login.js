import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import * as Actions from "../../Ducks/action_creator"
import "./login.css"

function Login(props) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const logUserIn = (email, password) => {
		const loginUser = {
			email,
			password
		}
		axios.post("/auth/login", loginUser).then(({ data }) => {
			if (data.success) {
				props.setUser(data.user)
				props.history.push("/homehealth")
			} else {
				alert("Username or password did not match our records")
			}
		})
	}

	return (
		<div className='login-box'>
			<h1 className='login-title'>Healthy Homes</h1>
			<div className='login-values'>
				<input type='text' placeholder='Email' name='setEmail' value={email} onChange={e => setEmail(e.target.value)} />
				<input
					type='password'
					placeholder='Password'
					name='setPassword'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type='submit' onClick={() => logUserIn(email, password)}>
					Login
				</button>
				<Link className='link' to='/register'>
					Register
				</Link>
			</div>
		</div>
	)
}

export default connect(
	null,
	Actions
)(Login)
