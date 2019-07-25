import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    constructor(props){
        super()
    }
    test=()=>{
        this.props.history.push('/loggedin')
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                    <li onClick={this.test}><a>Quiz</a></li>
                    <li><a>About</a></li>
                    <li style={{float:'right'}}><a>Profile</a></li>
                    </ul>
                </div>

                <div className="quizBubble">
                    <h2>Start quiz</h2>
                </div>
            </div>
        )
    }
}

export default Home;