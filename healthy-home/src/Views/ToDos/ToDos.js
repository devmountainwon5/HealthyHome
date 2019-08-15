import React, { useEffect } from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as Actions from "Ducks/action_creator"
import axios from "axios"
import httpRequest from "../../shared/services/http_request";

function Todos(props) {
	const { setSuggestedTodos, setUserTodos } = props
	useEffect(() => {
		axios.get('/auth/me')
			.then((response) => {
				if(!response.data.success){
					props.history.push('/')
				}else{
					httpRequest
						.get("/todo/suggested")
						.then(data => {
							setSuggestedTodos(data.suggested)
							return httpRequest.get("/todo/user")
							// } else {
							//     return props.history.push("/")
							// }
						})
						.then(data => {
							setUserTodos(response.data.userTodos)
							// } else {
							// 	alert("something blew up")
							// }
						})
						.catch(err => {
							console.log(err);
						});
				}
			});
	}, [setSuggestedTodos, setUserTodos, props.history])
	const addTodo = todo_id => {
		httpRequest.post("/todo/adduser", {}, { todo_id }).then(data => {
				props.setUserTodos(data.userTodos)
				// } else {
				// 	alert("something blew up")
				// }
			})
			.catch(err => {
				console.log(err);
			})
	}
	const deleteTodo = todo_id => {
		httpRequest.delete(`/todo/removeuser/${todo_id}`).then(data => {
				props.setUserTodos(data.userTodos)
				// } else {
				// 	alert("something blew up")
				// }
			})
			.catch(err => {
				console.log(err);
			})
	}
	const completeTodo = todo_id => {
		httpRequest.post("/todo/completeuser", {}, { todo_id }).then(data => {
				props.setUserTodos(
					data.userTodos.reduce((r, e, i, a) => {
						if (
							!r.some(e2 => {
								return e2.real_todo_id === e.real_todo_id
							})
						) {
							r.push(e)
						}
						return r
					}, [])
				)
				// } else {
				// 	alert("something blew up")
				// }
			})
			.catch(err => {
				console.log(err);
			})
	}

	const user = props.userTodos.map(e => {
		return (
			<div key={e.id}>
				{e.todo_item}
				<button
					onClick={() => {
						completeTodo(e.todo_id)
					}}>
					Complete
				</button>
				<button
					onClick={() => {
						deleteTodo(e.real_todo_id)
					}}>
					Remove
				</button>
			</div>
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
		<div>
			<NavBar />
			<div className='todoBox'>
				<h2>User Todos</h2>
				{user}
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
