import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as actions from '../../../Ducks/action_creator';
import Quiz from '../Quiz/quiz';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const loginUser = {
            email: email,
            password: password
        };
        axios.post('/auth/login', loginUser).then(({data}) => {
            if (data.success){
                this.props.setUser(data.user);
                this.props.history.push('/home')
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