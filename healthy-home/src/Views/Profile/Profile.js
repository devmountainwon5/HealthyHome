import React, { Component } from 'react'
import NavBar from 'Views/Home/NavBar/NavBar';
import {connect} from 'react-redux';
// import axios from 'axios';

class Profile extends Component {
    render() {
        const firstname = this.props.user.first_name
        const lastname = this.props.user.last_name
        const name = firstname + ' ' + lastname
        const email = this.props.user.email
        const phone = this.props.user.phone_num
        return (
            <div>
                <NavBar/>
                <div>
                    User Information
                    First name: {name} 
                    Email: {email} 
                    Phone Number: {phone} 
                </div>
                <div>
                    contact us
                </div>
            </div>
        )
    }
}

export default connect((state)=>{return state})(Profile)