import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

import axios from 'axios';
 
function NavBar(){

    function logout(){
        axios.post('/auth/logout')
            .then((response) => {
                console.log(response.data.success)
            })
    }

    return(
        <div className="navbar">
            <div className="navlinks">
                <ul>
                    <li><Link to="/homehealth">Healthy Home</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/tips"> Home Tips</Link></li>
                    <li><Link to='/subscribe'>To Do's</Link></li>
                </ul>
            </div>
                    
            <div className="dropdown">
                <ul>
                    <li style={{float:'right'}}><div className="dropbtn">Profile</div></li>
                        <div class="dropdown-content">
                            <Link to="/profile">My Profile</Link>
                            <Link to="/" onClick={logout}>Logout</Link>
                        </div> 
                </ul>
            </div>
        </div>
    )
}

export default NavBar;