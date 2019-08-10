import React, { useState, useEffect } from 'react';
import NavBar from './../../NavBar/NavBar';
import HomeTodo from './HomeTodo';
import YardTodo from './YardTodo';
import { connect } from 'react-redux';
import * as Actions from '../../../../Ducks/action_creator'
import axios from 'axios'

function Todos(props) {
    useEffect(() => {
        axios.get('/todo/suggested')

            .then((response) => {
                if (response.data.success) {
                    props.setSuggestedTodos(response.data.suggested)
                    return axios.get('/todo/user')
                } else {
                    alert('something blew up')
                }
            })
            .then((response) => {
                if (response.data.success) {
                    props.setUserTodos(response.data.userTodos.reduce( (r, e, i, a) => { 
                        if(!r.some( (e2) => {
                            return e2.real_todo_id === e.real_todo_id
                        } )) {
                            r.push(e)
                        }
                        return r 
                    }, [] ))
                } else {
                    alert('something blew up')
                }
            })
    }, [])
    const addTodo = (todo_id) => {
        axios.post('/todo/adduser', { todo_id })
            .then((response) => {
                if (response.data.success) {
                    props.setUserTodos(response.data.userTodos.reduce( (r, e, i, a) => { 
                        if(!r.some( (e2) => {
                            return e2.real_todo_id === e.real_todo_id
                        } )) {
                            r.push(e)
                        }
                        return r 
                    }, [] ))
                } else {
                    alert('something blew up')
                }
            })
    }
    const deleteTodo = (todo_id) => {
        axios.delete(`/todo/removeuser/${todo_id}`)
            .then((response) => {
                if (response.data.success) {
                    props.setUserTodos(response.data.userTodos.reduce( (r, e, i, a) => { 
                        if(!r.some( (e2) => {
                            return e2.real_todo_id === e.real_todo_id
                        } )) {
                            r.push(e)
                        }
                        return r 
                    }, [] ))
                } else {
                    alert('something blew up')
                }
            })
    }
    const completeTodo = (todo_id) => {
        axios.post('/todo/completeuser', { todo_id })
            .then((response) => {
                if (response.data.success) {
                    props.setUserTodos(response.data.userTodos.reduce( (r, e, i, a) => { 
                        if(!r.some( (e2) => {
                            return e2.real_todo_id === e.real_todo_id
                        } )) {
                            r.push(e)
                        }
                        return r 
                    }, [] ))
                } else {
                    alert('something blew up')
                }
            })
    }
    
    const user = props.userTodos.map((e) => {
        return <div key={e.id} >{e.todo_item}
            <button onClick={() => { completeTodo(e.todo_id) }}>Complete</button>
            <button onClick={() => { deleteTodo(e.real_todo_id) }}>Remove</button>
        </div>
    })
    const suggested = props.suggestedTodos.map((e) => {
        return <div key={e.todo_id}> {e.todo_item} <button onClick={() => { addTodo(e.todo_id) }}>Add</button> </div>
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

export default connect(state => state, Actions)(Todos)
// class ToDos extends Component {
//     constructor(props){
//         super(props)

//         this.state={
//             homeTips:'display home tips here',
//             yardTips:'display yard tips here'
//         }
//     }
//     render() {

//     }
// }

// export default ToDos;