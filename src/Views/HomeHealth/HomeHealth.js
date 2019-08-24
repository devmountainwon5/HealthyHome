import React, {useEffect} from "react"
import axios from 'axios';
import {connect} from 'react-redux';
import * as Actions from 'Ducks/action_creator';

import UpcomingTodos from "./UpcomingTodos/UpcomingTodos"
import HouseGraphic from "./HouseGraphic/HouseGraphic"
import NavBar from "Views/NavBar/NavBar"
import RandomTip from "./RandomTip/RandomTip"

import "./Homehealth.css"

function HomeHealth({history}) {

	useEffect(() => {
		// Auth: Is there a current user session?
		axios.get('/auth/me')
			.then((response) => {
				if(!response.data.success){
					history.push('/')
				}
			})
	}, [history])


	return (
		<div>
			<NavBar activeComponent='HomeHealth' />
			<div className='DashboardMain'>
				<div className='todos'>
					<UpcomingTodos className="DashboardElement" />
				</div>
				<div className='DashboardSecondary'>
					
					<HouseGraphic className="DashboardElement"/>
					<RandomTip className="DashboardElement"/>
				</div>
			</div>
		</div>
	)
}

export default connect(
	state => state,
	Actions
)(HomeHealth)
