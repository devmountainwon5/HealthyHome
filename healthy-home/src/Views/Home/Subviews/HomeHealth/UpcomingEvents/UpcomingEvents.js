import React, {Component} from 'react';
import './UpcomingEvents.css';


class UpcomingEvents extends Component{

    constructor(props){
        super(props);
        this.state={
            string: 'this is where we will get data from the relevant tables, after they have narrowed down what tasks will be with the quiz and any additional custom tasks the user creates.'
        }
    
    }
    render(){
        return(
            <div>
                <h1>Upcoming Events</h1>
                {this.state.string}
            </div>
        )
    }
}

export default UpcomingEvents;