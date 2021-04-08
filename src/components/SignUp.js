import React, { useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Endpoints
const SIGN_UP_URL = 'http://localhost:3000/users'

const SignUp = ({ sign_up }) => {

    // State for controlled form
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Submit post request to register user
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newUser = {
            user: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phoneNumber,
                password: password
            }
        }

        const userObj = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newUser)
        }
        
        const postUser = await fetch(SIGN_UP_URL, userObj)
        const userRes = await postUser.json()

        // If success redirect to home for login or show errors
        if (userRes.status === 'Success') {
            alert(userRes.msg)
            sign_up()
        } else if (userRes.statue === 'Failed') {

        }


    }
    
    return (
        <div>
            <h3>Sign Up</h3>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input type='text' name='firstName' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='text' name='phoneNumber' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return { sign_up: () => dispatch({ type: 'SIGN_UP', signUp: false}) }
}

export default connect(null, mapDispatchToProps)(SignUp)