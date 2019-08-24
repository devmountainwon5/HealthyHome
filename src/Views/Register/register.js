import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from "../../Ducks/action_creator";
import Snackbar from "../Snackbar/Snackbar";
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
    const [isErr, setIsErr] = useState(false);
    const errMsg = "Email already registered. Please login.";

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
        httpRequest.post('/auth/register', {}, registerUser).then((data) => {
                props.setUser(data.user);
                props.setAddress(data.address); 
                props.history.push('/quiz');
            })
            .catch(() => {
                setIsErr(true)
            })
    }

	const onSubmit = event => {
		// Prevents the form from reloading the page
		event.preventDefault()

		register()
	}

    return (
        <>
            <div className='register-box'>
                <h1 className='register-title'>
                Register
                </h1>
                <form className='register-values' onSubmit={onSubmit}>
                    First Name
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='First Name'
                        name='setFirstName'
                        value={firstName}
                        onChange={e=>setFirstName(e.target.value)}
                    />
                    Last Name
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='Last Name'
                        name='setLastName'
                        value={lastName}
                        onChange={e=>setLastName(e.target.value)}
                    />
                    Email
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='Email'
                        name='setEmail'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    Phone Number
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='Phone Number'
                        name='setPhoneNum'
                        value={phoneNum}
                        onChange={e=>setPhoneNum(e.target.value)}
                    />
                    Address Line 1 
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='Address Line 1'
                        name='setAddressLine1'
                        value={addressLine1}
                        onChange={e=>setAddressLine1(e.target.value)}
                    />
                    Address Line 2 
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='Address Line 2'
                        name='setAddressLine2'
                        value={addressLine2}
                        onChange={e=>setAddressLine2(e.target.value)}
                    />
                    City 
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='City'
                        name='setCity'
                        value={city}
                        onChange={e=>setCity(e.target.value)}
                    />
                    State 
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='State'
                        name='setState'
                        value={state}
                        onChange={e=>setState(e.target.value)}
                    />
                    ZIP Code 
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='ZIP Code'
                        name='setZip'
                        value={zip}
                        onChange={e=>setZip(e.target.value)}
                    />
                    Password
                    <input
                        autoComplete='on'
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
                </form>
            </div>
            {isErr ? <Snackbar message={errMsg} isActive={isErr} setIsActive={setIsErr}/> : null}
        </>
    )
}

export default connect(
	null,
	Actions
)(Register)
