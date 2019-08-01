import React, {Component} from 'react';
import NavBar from '../../../../NavBar/NavBar';

class Tasks extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
        <div className="upcomingTask">
            <h2>{this.props.name}</h2>
            <h2>{}</h2>
        </div>
    )}
};

    

export default Tasks;