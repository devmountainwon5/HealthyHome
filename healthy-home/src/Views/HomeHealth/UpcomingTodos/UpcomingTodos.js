import React from "react"
import { connect } from "react-redux"
import * as Actions from "Ducks/action_creator"
// import axios from "axios"
import "./UpcomingTodos.css"

function UpcomingTodos(props) {
	// const {setUpcomingTodos} = props
	
	// useEffect(() => {
	// 	axios.get("/upcomingTodos/user").then(({data}) => {
	// 		if (data.success) {
	// 			console.log('upcoming todo response', data)
	// 			setUpcomingTodos(data.upcomingTodos)
	// 		} else {
	// 			alert("something blew up")
	// 		}
	// 	})
	// }, [setUpcomingTodos])

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
)(UpcomingTodos)
