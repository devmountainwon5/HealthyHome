import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import * as Actions from "../../Ducks/action_creator"
import "./Tips.css"
import Tip from "./Tip"
import NavBar from "Views/NavBar/NavBar"
import httpRequest from "../../shared/services/http_request"

function Tips(props) {
	const [tips, setTips] = useState([])
	useEffect(() => {
		httpRequest
			.get("/tips/retrieveAll")
			.then(data => {
				if (data.success) {
					setTips(data.tips)
				} else {
					return props.history.push("/")
				}
			})
			.catch(err => {
				console.log(err)
			})
	}, [props.history])

	const loopTips = tips.map((e, i) => {
		return <Tip tip={e} key={i} />
	})
	return (
		<div className='tips-main'>
			<NavBar activeComponent='Tips' />
			<div className='center-tips'>
				<h1 className='tips-title'>Tips</h1>
				<div className='all-tips-div'>{loopTips}</div>
			</div>
		</div>
	)
}

export default connect(
	null,
	Actions
)(Tips)
