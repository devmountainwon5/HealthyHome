import React, {Component} from 'react';

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