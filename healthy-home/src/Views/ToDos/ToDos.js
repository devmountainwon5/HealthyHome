import React, { useEffect } from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as Actions from "Ducks/action_creator"
import Todo from './Todo/Todo'

import httpRequest from "../../shared/services/http_request";

import './ToDos.css';
const filterTodos = (suggestedTodos, userTodos) => {
	suggestedTodos = suggestedTodos.filter((e) => {
		return !userTodos.some((e2) => {
			return e.todo_id === e2.todo_id
		})
	})
	return {
		suggestedTodos,
		userTodos
	}
}


function Todos(props) {
	let updateTodos = (todos) => {
		setUserTodos(todos.userTodos)
		setSuggestedTodos(todos.suggestedTodos)
	}
	const { setSuggestedTodos, setUserTodos, setAllSuggestedTodos } = props
	useEffect(() => {
		let suggestedTodos = []
		httpRequest
			.get("/todo/suggested")
			.then(data => {
					suggestedTodos = data.suggested
					return httpRequest.get("/todo/user")
			})
			.then(data => {
					setAllSuggestedTodos(suggestedTodos)
					updateTodos(filterTodos(suggestedTodos, data.userTodos))
			})
	}, [setSuggestedTodos, setUserTodos, props.history])
	const addTodo = todo_id => {
		httpRequest.post("/todo/adduser", {}, { todo_id }).then(data => {
				updateTodos(filterTodos(props.allSuggestedTodos, data.userTodos))
				alert("Todo Added")
		})
	}
	const deleteTodo = todo_id => {

		httpRequest.delete(`/todo/removeuser/${todo_id}`).then(data => {
				updateTodos(filterTodos(props.allSuggestedTodos, data.userTodos))
				alert("Todo Deleted")
		})
	}
	const completeTodo = todo_id => {
		httpRequest.post("/todo/completeuser", {}, { todo_id }).then(data => {
				updateTodos(filterTodos(props.allSuggestedTodos, data.userTodos))
				alert("Todo Completed")
		})
	}

	const user = props.userTodos.map(e => {
		return (
			<Todo key={e.id} deleteTodo={deleteTodo} completeTodo={completeTodo} todo={e} />
		)
	})
	const suggested = props.suggestedTodos.map(e => {
		return (
			<div key={e.todo_id}>
				{" "}
				{e.todo_item}{" "}
				<button
					onClick={() => {
						addTodo(e.todo_id)
					}}>
					Add
				</button>{" "}
			</div>
		)
	})
	return (
		<div className="ToDos">
			<NavBar activeComponent='ToDos' />
			<div className='todoBox'>
				<h2>User Todos</h2>
				<div className="todo-items">
					{user}
				</div>
			</div>
			<div className='todoBox'>
				<h2>Suggested Todos</h2>
				{suggested}
			</div>
		</div>
	)
}

export default connect(
	state => state,
	Actions
)(withRouter(Todos))
