import React from "react"
import { connect } from "react-redux"
import * as Actions from "Ducks/action_creator"
import "./UpcomingTodos.css"

function UpcomingTodos(props) {

	const todos = props.upcomingTodos.map(e => {
		let overDue = [];
		let due = [];
		if (e.overDiff > 0){
			overDue.push(e)
		}else{
			due.push(e)
		}
		return <div key={e.id}>{overDue.todo_item}{due.todo_item}</div>
	})
	return (
		<div className='UpcomingMaster'>
			<span>
				<h1>Upcoming Events</h1>
			</span>
			<div>{todos}</div>
		</div>
	)
}

export default connect(
	state => state,
	Actions
)(UpcomingTodos)
