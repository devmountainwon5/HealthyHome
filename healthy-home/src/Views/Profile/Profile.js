import React, { Component } from 'react'
import NavBar from 'Views/Home/NavBar/NavBar';
// import axios from 'axios';

export default class Profile extends Component {
    render() {
        return (
            
            <div>
                <NavBar/>
                <div>
                    Information
                </div>
                <div>
                    User Options
                    Username:
                    Email:
                    Profile Picture:
                </div>
                <div>
                    Contact
                </div>
            </div>
        )
    }
}
