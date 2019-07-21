import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as actions from '../../../Ducks/action_creator';

export default function Register(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        const registerUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        axios.post('/auth/user', registerUser).then(({data}) => {
            if(data.success){
                props.setUser(data.user);
                props.history.push('/quiz')
            }else{
                alert('Invalid credentials')
            }
        })
    }

    return (
        <div>
            <div className='register-box'>
                Register
                <hr/>
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
                Password
                <input
                    type='password'
                    placeholder='Password'
                    name='setPassword'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button type='submit' onClick={register}>Register</button>
                Already registered?
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}