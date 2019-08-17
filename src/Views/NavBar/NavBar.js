import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import * as Actions from "Ducks/action_creator"
import "./NavBar.css"
import httpRequest from "../../shared/services/http_request";

import Menu from './../../Assets/menu.svg';


function NavBar(props) {
	const logout = () => {
		httpRequest.post("/auth/logout").then(data => {
			console.log(data.success);
			})
			.catch(err => {
				console.log(err);
			});

			props.setUser({});
			props.setAddress({});
	}

	return (
		<div className='MasterDiv'>
			
			<div className='hamburger'>
				<img src={Menu} />
			</div>

			<div className='navbar'>
				
				<div className='navlinks'>

					<ul>
						<li className={props.activeComponent === 'HomeHealth' ? 'active' : ''}>
							<Link to='/homehealth'>Healthy Home</Link>
						</li>
						<li className={props.activeComponent === 'Tips' ? 'active' : ''}>
							<Link to='/tips'> Home Tips</Link>
						</li>
						<li className={props.activeComponent === 'ToDos' ? 'active' : ''}>
							<Link to='/subscribe'>To Do's</Link>
						</li>
					</ul>
				</div>

				<div className='dropdown'>
					<ul>
						<li style={{ float: "right" }} className={props.activeComponent === 'Profile' ? 'active' : ''}>
							<div className='dropbtn'>Profile</div>
						</li>
						<div className='dropdown-content'>
							<Link to='/profile'>My Profile</Link>
							<Link to='/' onClick={logout}>
								Logout
							</Link>
						</div>
					</ul>
				</div>
				
			</div>
		</div>
	)
}

export default connect(
	state => state,
	Actions
)(NavBar)