import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Endpoints
const LOGIN_URL = 'http://localhost:3000/sessions'

const Login = ({ history }) => {

    // redux hooks
    const dispatch = useDispatch()
    
    // local state for form
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
            dispatch({ type: 'SET_USER', user: sesRes.user})
            dispatch({ type: 'SET_TRIPS', trips: sesRes.user.trips})
            dispatch({ type: 'SET_VEHICLES', vehicles: sesRes.user.vehicles})
            dispatch({ type: 'SET_MAINTENANCE_REPORTS', maintenanceReports: sesRes.user.maintenance_reports})
            dispatch({ type: 'SET_EMERGENCY_CONTACTS', emergencyContacts: sesRes.user.emergency_contacts})
            history.push('/home')
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
            <div>
               Not a user? <Link to='/signup'>Sign Up</ Link>
            </div>
        </div>
    )
}

export default withRouter(Login)