import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import HouseGraphic from './HouseGraphic/HouseGraphic'
import './HomeHealth.css'



class HomeHealth extends Component {

    constructor(props){
        super(props);

        this.state={

        }
    }

    render() {
        return (
            <div>
                {/* <div className="navbar">
                    <ul>
                    <li><a>Home</a></li>
                    <li><a>Healthy Home</a></li>
                    <li><a>Calendar</a></li>
                    <li><a>How to</a></li>
                    <li style={{float:'right'}}><a>Profile</a></li>
                    </ul>
                </div> */}
                Healthy home
                <UpcomingEvents />
                <HouseGraphic />
            </div>
        )
    }
}

export default HomeHealth;