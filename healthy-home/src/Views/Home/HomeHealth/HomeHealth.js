import React from "react"

import Tasks from "./Tasks/Tasks"
import HouseGraphic from "./HouseGraphic/HouseGraphic"
import NavBar from "Views/NavBar/NavBar"
import RandomTip from "./RandomTip/RandomTip"

import "./Homehealth.css"

function HomeHealth() {
	return (
		<div>
			<NavBar />
			<div className='DashboardMain'>
				<Tasks />
				<div className='DashboardSecondary'>
					<RandomTip />
					<HouseGraphic />
				</div>
			</div>
		</div>
	)
}
export default HomeHealth
