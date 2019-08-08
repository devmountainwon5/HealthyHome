import React, { useState, useEffect } from 'react';
import NavBar from './../../NavBar/NavBar';
import HomeTodo from './HomeTodo';
import YardTodo from './YardTodo';
import {connect} from 'react-redux';
import * as Actions from '../../../../Ducks/action_creator'
import axios from 'axios'

function Todos() {
    useEffect(() => {
        axios.get ('/todos/retrieveAll') 
        .then((response) => {
            if(response.data.success) {
                this.props.setSuggestedTodos (response.data.suggestedTodos)
                this.props.setUserTodos (response.data.userTodos)
            } else {
                alert('something blew up')
            }
        })
    }, [])
    return (
        <div>
            <NavBar/>
            <div className='todoBox'>
                <h2>Todos for the Home</h2>
                {/* {HomeTodo} */}
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