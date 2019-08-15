import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from "../../Ducks/action_creator";
import './register.css';
import httpRequest from "../../shared/services/http_request"

 function Register(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState(''); 
    const [addressLine1, setAddressLine1] = useState(''); 
    const [addressLine2, setAddressLine2] = useState(''); 
    const [city, setCity] = useState(''); 
    const [state, setState] = useState(''); 
    const [zip, setZip] = useState(''); 

    const register = () => {
        const registerUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNum: phoneNum,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state,
            zip: zip
        }
        httpRequest.post('/auth/register', {}, registerUser).then(({data}) => {
                props.setUser(data.user);
                props.setAddress(data.address); 
                props.history.push('/quiz');
            // else{
            //     alert('Invalid credentials')
            // }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='register-box'>
            <h1 className='register-title'>
            Register
            </h1>
            <div className='register-values'>
                First Name
                <input
                    type='text'
                    placeholder='First Name'
                    name='setFirstName'
                    value={firstName}
                    onChange={e=>setFirstName(e.target.value)}
                />
                Last Name
                <input
                    type='text'
                    placeholder='Last Name'
                    name='setLastName'
                    value={lastName}
                    onChange={e=>setLastName(e.target.value)}
                />
                Email
                <input
                    type='text'
                    placeholder='Email'
                    name='setEmail'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                Phone Number
                <input
                    type='text'
                    placeholder='Phone Number'
                    name='setPhoneNum'
                    value={phoneNum}
                    onChange={e=>setPhoneNum(e.target.value)}
                />
                Address Line 1 
                <input
                    type='text'
                    placeholder='Address Line 1'
                    name='setAddressLine1'
                    value={addressLine1}
                    onChange={e=>setAddressLine1(e.target.value)}
                />
                Address Line 2 
                <input
                    type='text'
                    placeholder='Address Line 2'
                    name='setAddressLine2'
                    value={addressLine2}
                    onChange={e=>setAddressLine2(e.target.value)}
                />
                City 
                <input
                    type='text'
                    placeholder='City'
                    name='setCity'
                    value={city}
                    onChange={e=>setCity(e.target.value)}
                />
                State 
                <input
                    type='text'
                    placeholder='State'
                    name='setState'
                    value={state}
                    onChange={e=>setState(e.target.value)}
                />
                ZIP Code 
                <input
                    type='text'
                    placeholder='ZIP Code'
                    name='setZip'
                    value={zip}
                    onChange={e=>setZip(e.target.value)}
                />
                Password
                <input
                    type='password'
                    placeholder='Password'
                    name='setPassword'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button type='submit' onClick={register}>Register</button>
                <div className='is-registered'>
                Already registered?
                <Link className='link' to='/'>Login</Link>
            </div>
            </div>
        </div>
    )
}

export default connect(null, Actions)(Register); 