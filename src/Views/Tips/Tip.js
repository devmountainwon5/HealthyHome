import React, { useEffect } from "react"
import axios from "axios"
import "./Tip.css"

export default function Tip({ history, tip: { tip_picture, tip_name, blog_link } }) {
	useEffect(() => {
		axios.get("/auth/me").then(({ data: { success } }) => {
			if (!success) {
				history.push("/")
			}
		})
	})

	return (
		<div>
			<div className='singleTips'>
				<a className='tip-name' href={blog_link} target='_blank' rel='noopener noreferrer'>
					<img className='tip-picture' src={tip_picture} alt='tip' />
					<h2>{tip_name}</h2>
				</a>
			</div>
		</div>
	)
}
