import React, { useState } from 'react'

// Endpoints
const LOGIN_URL = 'http://localhost:3000/sessions'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const user = {
            user: {
                email: email,
                password: password
            }
        }
        
        const userObj = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        }

        const postSes = await fetch(LOGIN_URL, userObj)
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <div>
                <form onSubmit={() => handleSubmit()}>
                    <div>
                        <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login