import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import * as actions from "../../../Ducks/action_creator"
import Register from "../Register/register"

let color = "blue"
export default function Login(props) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [title, setTitle] = useState("Login")

	useEffect(() => {
		window.addEventListener("resize", doTheColorThing)
		return () => {
			window.removeEventListener("resize", doTheColorThing)
		}
	}, [])
  
	useEffect(() => {
		document.title = title
	}, [title])

	return (
		<div>
			<div className='login-box'>
				<input type='text' value={title} name='title' onChange={e => setTitle(e.target.value)} />
				<Link to='/home'>go home</Link>
				<hr />
				Login
				<hr />
				Email
				<input type='text' placeholder='Email' name='setEmail' value={email} onChange={e => setEmail(e.target.value)} />
				Password
				<input
					type='password'
					placeholder='Password'
					name='setPassword'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type='submit' onClick={()=>logUserIn(email, password)}>
					Login
				</button>
				<Link to='/register'>Register</Link>
			</div>
		</div>
	)
}

function doTheColorThing() {
	if (color == "green") {
		color = "red"
	} else {
		color = "green"
	}
	document.getElementById("root").style.background = color
}

function logUserIn(email, password) {
	const loginUser = {
		email,
		password
	}
	axios.post("/auth/login", loginUser).then(({ data }) => {
		if (data.success) {
			// props.setUser(data.user)
			// props.history.push("/home")
		} else {
			alert("Username or password did not match our records")
		}
	})
}
