import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as actions from '../../../Ducks/action_creator';
import Register from '../Register/register';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const loginUser = {
            email: email,
            password: password
        };
        axios.post('/auth/login', loginUser).then(({data}) => {
            if (data.success){
                props.setUser(data.user);
                props.history.push('/home')
            }else{
                alert('Username or password did not match our records')
            }
        });
    };

    return (
        <div>
            <div className='login-box'>
                Login
                <hr/>
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
                <button type='submit' onClick={login}>Login</button>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}