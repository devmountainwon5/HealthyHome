import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import HouseGraphic from './HouseGraphic/HouseGraphic';
import './Homehealth.css';
import NavBar from './../../NavBar/NavBar';
import RandomTip from './RandomTip/RandomTip';
import axios from 'axios';

class HomeHealth extends Component {

    constructor(props){
        super(props);

        this.state={
            
        }
    }

    componentDidMount(){
        axios.post('/auth/me')
    }


    render() {
        return (
            <div>
                <NavBar/> 
                <div className="DashboardMain">
                    <UpcomingEvents />
                    <div className="DashboardSecondary">
                        <RandomTip/>
                        <HouseGraphic />
                    </div>
                </div>
                
                
            </div>
        )
    }
}
export default HomeHealth;