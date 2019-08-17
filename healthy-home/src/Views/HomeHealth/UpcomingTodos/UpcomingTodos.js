import React from "react"
import { connect } from "react-redux"
import * as Actions from "Ducks/action_creator"
import "./UpcomingTodos.css"

function UpcomingTodos(props) {

	const todos = props.upcomingTodos.map(e => {
		let str = ''
		if (e.overDiff > 0){
			e.str = 'overdue'
		}else{
			e.str = 'due'
		}
		return <div className={e.str} key={e.id}>{e.todo_item}</div>
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
