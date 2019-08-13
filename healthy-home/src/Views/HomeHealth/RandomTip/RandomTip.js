import React, { useState, useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as Actions from "Ducks/action_creator"
import httpRequest from "../../../shared/services/http_request";

import "./RandomTip.css"

const CancelToken = axios.CancelToken

function RandomTip(props) {
	const [random, setRandom] = useState({})
	useEffect(() => {
		let cancelToken
		httpRequest
			.get("/tips/getOne", {
				cancelToken: new CancelToken(c => (cancelToken = c))
			})
			.then((data) => {
				setRandom(data.random[0])
				// } else {
				// 	return props.history.push("/")
				// }
			})
			.catch(err => {
				console.log(err);
			})
		return () => cancelToken && cancelToken()
	}, [props.history])

	return (
		<>
			{random.blog_link && (
				<div className='all-tips'>
					<a className='random-name' href={random.blog_link} target='_blank' rel='noopener noreferrer'>
						<img className='random-picture' src={random.tip_picture} alt='tips' />
						<h2>{random.tip_name}</h2>
					</a>
				</div>
			)}
		</>
	)
}

export default connect(
	null,
	Actions
)(withRouter(RandomTip))
