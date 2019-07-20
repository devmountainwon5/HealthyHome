import React, { Component } from 'react'

class HomeHealth extends Component {
    render() {
        return (
            <div>
                    <div className="navbar">
                        <ul>
                        <li><a>Home</a></li>
                        <li><a>Healthy Home</a></li>
                        <li><a>Calendar</a></li>
                        <li><a>How to</a></li>
                        <li style={{float:'right'}}><a>Profile</a></li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default HomeHealth;