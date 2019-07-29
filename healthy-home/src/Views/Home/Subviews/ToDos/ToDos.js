import React, { Component } from 'react';
import NavBar from './../../NavBar/NavBar';

class ToDos extends Component {
    constructor(props){
        super(props)

        this.state={
            homeTips:'display home tips here',
            yardTips:'display yard tips here'
        }
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className='tipsBox'>
                    <h2>Tips for the Home</h2>
                    {this.state.homeTips}
                </div>
                <div className='tipsBox'>
                    <h2>Tips for the Yard</h2>
                    {this.state.yardTips}
                </div>
            </div>
        )
    }
}

export default ToDos;