import React, { useState, useEffect } from 'react';
import NavBar from './../../NavBar/NavBar';
import HomeTodo from './HomeTodo';
import YardTodo from './YardTodo';
import {connect} from 'react-redux';
import * as Actions from '../../../../Ducks/action_creator'
import axios from 'axios'

function Todos(props) {
    useEffect(() => {
        axios.get ('/todo/suggested')
         
        .then((response) => {
            if(response.data.success) {
                props.setSuggestedTodos (response.data.suggested)
                return axios.get ('/todo/user')
            } else {
                alert('something blew up')
            }
        })
        .then( (response)=> {
            if(response.data.success) {
                props.setUserTodos (response.data.userTodos)
            } else {
                alert('something blew up')
            }
        })
    }, []) 
    const user = props.userTodos.map ((e)=> {
        return <div key= {e.id} >{e.todo_item}</div>
    })
    const suggested =props.suggestedTodos.map ((e)=> {
        return <div key= {e.id}> {e.todo_item}</div>
    })
    return (
        <div>
            <NavBar/>
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

export default connect( state => state, Actions) (Todos)
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