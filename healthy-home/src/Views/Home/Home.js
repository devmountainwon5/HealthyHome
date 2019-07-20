import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                    <li><a>Quiz</a></li>
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