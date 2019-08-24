import React from "react"
import { connect } from "react-redux"
import * as Actions from "Ducks/action_creator"
import "./UpcomingTodos.css"

function UpcomingTodos(props) {

	const todos = props.upcomingTodos.map(e => {
		if (e.overDiff >= 7){
			e.str = 'very-overdue';
			e.overdueStr = ' (overdue by ' + e.overDiff + ' days)'
		}else if(e.overDiff > 0){
			e.str = 'overdue';
			e.overdueStr = ' (overdue by ' + e.overDiff + ' days)'
		}else{
			e.str = 'due'
		}
		return <div className={[e.str, 'mytodo'].join(' ')} key={e.id}>{e.todo_item}{e.overdueStr}</div>
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
