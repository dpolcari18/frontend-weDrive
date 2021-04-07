import React, { useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Endpoints
const LOGIN_URL = 'http://localhost:3000/sessions'

const Login = ({ dispatch }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // send fetch to rails api to create session
    const handleSubmit = async (e) => {
        e.preventDefault()

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
        const sesRes = await postSes.json()

        if (sesRes.status === 'Success') {
            localStorage.setItem('auth_key', sesRes.token)
            dispatch({ type: 'LOGIN_USER', loggedIn: true})
        } else if (sesRes.status === 'Failed') {
            alert(sesRes.msg)
            // Reset form if login fails
            setEmail('')
            setPassword('')
        }
        
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
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

export default connect()(Login)