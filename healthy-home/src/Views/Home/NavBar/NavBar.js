import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
 
function NavBar(){
    return(
        <div className="navbar">
                    <ul>
                        <li><Link to="/homehealth">Healthy Home</Link></li>
                        {/* <li><Link to="/calendar">Calendar</Link></li> */}
                        <li><Link to="/tips"> Home Tips</Link></li>
                        <li><Link to='/subscribe'>To Do's</Link></li>
                        <li style={{float:'right'}}><a>Profile</a></li>
                    </ul>
        </div>
    )
}

export default NavBar;