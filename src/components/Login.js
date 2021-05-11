import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Endpoints
const LOGIN_URL = 'https://wedrive.netlify.app/sessions'
// const LOGIN_URL = 'http://localhost:3000/sessions'

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

        // set all state
        if (sesRes.status === 'Success') {
            localStorage.setItem('auth_key', sesRes.token)
            localStorage.setItem('user_id', sesRes.user.id)
            
            dispatch({ type: 'LOGIN_USER', loggedIn: true})
            dispatch({ type: 'SET_USER', user: sesRes.user})
            dispatch({ type: 'SET_TRIPS', trips: sesRes.user.trips, locations: sesRes.user.locations})
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
        <Container id='login'>
            <h3>LOGIN</h3>
            <Form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                <Form.Group>
                    <Form.Control type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>                
                <Form.Group>
                    <Form.Control type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Row>
                    <Col>
                        <Button variant='outline-primary' type='submit'>Login</Button>
                    </Col>
                </Row>
            </Form>
            <Row id='sign-up-link'>
                <Col>
                    Not a user? <Link to='/signup'>Sign Up</ Link>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Login)