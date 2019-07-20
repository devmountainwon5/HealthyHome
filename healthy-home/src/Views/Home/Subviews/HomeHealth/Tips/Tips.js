import React, {Component} from 'react';

class Tips extends Component{
    constructor(props){
        super(props);
        this.state = {
            string: 'this is where the tips data State will live, gathered from the relevant tables.'
        }
    }

    render(){
        return(
            <div>
                <h1>Cleaning Tips</h1>
                {this.state.string}
            </div>
        )
    }
}

export default Tips;
