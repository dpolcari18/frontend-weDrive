import React, { useState } from 'react'
import { withRouter } from 'react-router'

// Redux
import { connect } from 'react-redux'

// Containers
import About from './About'

// Endpoints
const SIGN_UP_URL = 'http://localhost:3000/users'

const SignUp = ({ history, throw_error, showError, errors }) => {

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
            history.push('/')
        } else if (userRes.status === 'Failed') {
            throw_error(userRes.msg)
        }


    }
    
    return (
        <div>
            <About />
            <h3>Sign Up</h3>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input type='text' name='firstName' placeholder='* First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='text' name='lastName' placeholder='* Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='text' name='phoneNumber' placeholder='* Phone Number' required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='* Email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='* Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button type='submit'>Sign Up</button>
                    </div>
                    <div>* Mandatory Fields</div>
                    { showError ? <ul>{errors.map(msg => <li>{msg}</li>)}</ul> : null}
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showError: state.loginSignUp.showError,
        errors: state.loginSignUp.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        throw_error: (errors) => dispatch({ type: 'SHOW_ERRORS', showError: true, errors: errors})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))