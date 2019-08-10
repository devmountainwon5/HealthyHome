import React, { useEffect } from "react"
import { connect } from "react-redux"
import * as Actions from "Ducks/action_creator"
import axios from "axios"
import "./Tasks.css"

function Tasks(props) {
	const {setUpcomingTodos} = props
	
	useEffect(() => {
		axios.get("/upcomingTodos/user").then(res => {
			if (res.data.success) {
				setUpcomingTodos(res.data.upcomingTodos)
			} else {
				alert("something blew up")
			}
		})
	}, [setUpcomingTodos])

	const user = props.upcomingTodos.map(e => {
		return <div key={e.id}>{e.todo_item}</div>
	})
	return (
		<div className='UpcomingMaster'>
			<span>
				<h1>Upcoming Events</h1>
			</span>
			<div>{user}</div>
		</div>
	)
}

export default connect(
	state => state,
	Actions
)(Tasks)
