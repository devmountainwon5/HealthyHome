import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import HouseGraphic from './HouseGraphic/HouseGraphic';
import './Homehealth.css';
import NavBar from './../../NavBar/NavBar';
import RandomTip from './RandomTip/RandomTip';
import Axios from 'axios';



class HomeHealth extends Component {

    constructor(props){
        super(props);

        this.state={
            
        }
    }



    render() {
        return (
            <div>
                <NavBar/>
                Healthy home
                <UpcomingEvents />
                <HouseGraphic />
                <RandomTip/>
            </div>
        )
    }
}

export default HomeHealth;