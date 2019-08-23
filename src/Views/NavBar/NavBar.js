import React, { useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import * as Actions from "Ducks/action_creator"
import "./NavBar.css"
import httpRequest from "../../shared/services/http_request";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Menu from './../../Assets/menu.svg';


function NavBar({setUser, setAddress, history, activeComponent}) {
	const logout = useCallback(() => {
		httpRequest.post("/auth/logout").then(data => {
			})
			.catch(err => {
				console.log(err);
			});

			setUser({});
			setAddress({});
	}, [setUser, setAddress])

	// The NavBar is on all pages that require authentication, so check if logged in here
	useEffect(() => {
		// axios used over httpRequest to access extra data
		axios.get("/auth/me")
			.then(({data}) => {
				if (!data.success) {
					console.log("Not logged in");
					history.push('/');
				}
			})
			.catch(err => {
				console.log(err);
			})
	}, [history]);

	return (
		<div className='MasterDiv'>
			
			<div className='hamburger'>
				<img src={Menu} alt='menu'/>
			</div>

			<div className='navbar'>
				
				<div className='navlinks'>

					<ul>
						<li className={activeComponent === 'HomeHealth' ? 'active' : ''}>
							<Link to='/homehealth'>Healthy Home</Link>
						</li>
						<li className={activeComponent === 'Tips' ? 'active' : ''}>
							<Link to='/tips'> Home Tips</Link>
						</li>
						<li className={activeComponent === 'ToDos' ? 'active' : ''}>
							<Link to='/subscribe'>To Do's</Link>
						</li>
					</ul>
				</div>

				<div className='dropdown'>
					<ul>
						<li style={{ float: "right" }} className={activeComponent === 'Profile' ? 'active' : ''}>
							<Link to='/profile' className='dropbtn'>Profile</Link>
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
)(withRouter(NavBar))