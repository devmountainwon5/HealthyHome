import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar(){
    return(
        <div className="navbar">
                    <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/">Healthy Home</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/tips">Tips</Link></li>
                    <li style={{float:'right'}}><a>Profile</a></li>
                    </ul>
        </div>
    )
}

export default NavBar;