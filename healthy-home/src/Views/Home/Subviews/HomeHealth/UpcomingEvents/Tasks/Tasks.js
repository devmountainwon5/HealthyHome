import React, {Component} from 'react';
import NavBar from '../../../../NavBar/NavBar';

class Tasks extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
        <div>
            <h2>{this.props.name}</h2>
        </div>
    )}
};

    

export default Tasks;