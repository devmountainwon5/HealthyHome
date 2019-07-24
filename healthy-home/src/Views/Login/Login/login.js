import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import * as Actions from "../../../Ducks/action_creator"

 function Login(props) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function logUserIn(email, password) {
		debugger; 
		const loginUser = {
			email,
			password
		}
		axios.post("/auth/login", loginUser).then(({ data }) => {
			debugger; 
			if (data.success) {
				props.setUser(data.user)
				props.history.push("/home")
			} else {
				alert("Username or password did not match our records")
			}
		})
	}

	return (
		<div>
			<div className='login-box'>
				<hr />
				Login
				<hr />
				Email
				<input 
					type='text' 
					placeholder='Email' 
					name='setEmail' 
					value={email} 
					onChange={e => setEmail(e.target.value)} />
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

// let color = "blue"

// function doTheColorThing() {
// 	if (color == "blue") {
// 		color = "red"
// 	} else {
// 		color = "blue"
// 	}
// 	document.getElementById("root").style.background = color
// }

// useEffect(() => {
// 	window.addEventListener("resize", doTheColorThing)
// 	return () => {
// 		window.removeEventListener("resize", doTheColorThing)
// 	}
// }, [])
  
// useEffect(() => {
// 	document.title = title
// }, [title])


export default connect(null, Actions)(Login); 