import React, { Component } from 'react'

export default class login extends Component {
    state = {
        email: '',
        password: '',
        loggedIn: false
    };

    

    render() {
        return (
            <div>
                <div className='login-box'>
                    Email
                    <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    Password
                    <input
                        type='text'
                        placeholder='Password'
                        name='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}
