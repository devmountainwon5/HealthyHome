import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './UpcomingEvents.css';
import Tasks from './Tasks/Tasks';
import {connect} from 'react-redux';
import * as actions from './../../../../../Ducks/action_creator';

// Changed this component from a class component to a functional one.
// Added hooks and http request to backend. -Kris

function UpcomingEvents (props){
       
    const [taskList, setTaskList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getUpcomingTasks();
    }, []);

    function getUpcomingTasks(){
        const {user_id} = props.user
        axios.post('/upcoming/retrieveTasks', {user_id})
            .then((response) => {
                setLoading(true);
                setTaskList(response.data);
                console.log(response)
            })
    }        

    const pageList = taskList.map((e)=>{
        return <Tasks name={e.todo_item} date={e.date_Added}/>
    })

    return(
        <div className="UpcomingMaster">
            <span><h1>Upcoming Events</h1></span>
                {pageList}
            </div>
        )
}

export default connect(state => state, actions)(UpcomingEvents);