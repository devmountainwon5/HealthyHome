import React, {useState, useEffect} from 'react';
import NavBar from '../../../../NavBar/NavBar';
import {connect} from 'react-redux';
import * as Actions from '../../../../../../Ducks/action_creator';
import axios from 'axios';
import './Tasks.css';

function Tasks(props) {
    useEffect(() => {
        axios.get ('/upcomingTodos/user')
        .then( res => {
            if(res.data.success) {
                props.setUpcomingTodos (res.data.upcomingTodos)
            } else {
                alert('something blew up')
            }
        })
    }, []) 
    const user = props.upcomingTodos.map ((e)=> {
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