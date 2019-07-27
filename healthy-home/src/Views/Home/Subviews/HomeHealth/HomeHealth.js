import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import Tips from './Tips/Tips';
import HouseGraphic from './HouseGraphic/HouseGraphic';
import './Homehealth.css';
import NavBar from './../../NavBar/NavBar';



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
            </div>
        )
    }
}

export default HomeHealth;