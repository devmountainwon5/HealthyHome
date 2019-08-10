import React from "react"
import "./Home.css"

export default function Home (props) {
	const test = () => {
		props.history.push("/loggedin")
	}
	const profile = () => {
		props.push("/")
	}

	return (
		<div>
			<div className='navbar'>
				<ul>
					<li onClick={test}>Quiz</li>
					<li>About</li>
					<li onClick={profile} style={{ float: "right" }}>
						Profile
					</li>
				</ul>
			</div>

			<div className='quizBubble'>
				<h2>Start quiz</h2>
			</div>
		</div>
	)
}
