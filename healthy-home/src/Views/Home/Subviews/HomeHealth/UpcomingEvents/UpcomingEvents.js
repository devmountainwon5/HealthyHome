import React, {Component} from 'react';
import './UpcomingEvents.css';
import Tasks from './Tasks/Tasks';


class UpcomingEvents extends Component{

    constructor(props){
        super(props);
        this.state={
            list: [{
                    name: 'mow lawn',
                    type: 'yard',
                    dueDate: {year: 2019, month: 9, day: 14},
                    lastCompleted: {year: 2019, month: 9, day: 7},
                    frequency: null},
                {
                    name: 'clean bathrooms',
                    type: 'home',
                    dueDate: {year: 2019, month: 9, day: 21},
                    lastCompleted: {year: 2019, month: 9, day: 7},
                    frequency: null},
                {
                    name: 'clean rain gutters',
                    type: 'home',
                    dueDate: {year: 2020, month: 5, day: 11},
                    lastCompleted: {year: 2019, month: 5, day: 12},
                    frequency: null}
                ]
        }
    
    }
    render(){
        const taskList = this.state.list.map((e)=>{
            return <Tasks name={e.name}/>
        })
        return(
            <div className="UpcomingMaster">
                <span><h1>Upcoming Events</h1></span>
                
                {taskList}
            </div>
        )
    }
}

export default UpcomingEvents;