import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            </div>
        </div>
    )
}

