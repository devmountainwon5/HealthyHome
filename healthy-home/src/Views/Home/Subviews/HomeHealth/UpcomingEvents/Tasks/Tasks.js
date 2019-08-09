import React, {useState, useEffect} from 'react';
import NavBar from '../../../../NavBar/NavBar';
import {connect} from 'react-redux';
import * as Actions from '../../../../../../Ducks/action_creator';
import axios from 'axios';
import './Tasks.css';

function Tasks(props) {
    useEffect(() => {
        axios.get ('/todo/user')
         
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
    return (
        <div>
            <div>
                {user}
            </div>
        </div>
    )
}

export default connect( state => state, Actions) (Tasks)