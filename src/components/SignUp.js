import React, { useState } from 'react'
import { withRouter } from 'react-router'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Containers
import About from './About'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Endpoints
const SIGN_UP_URL = 'http://localhost:3000/users'

const SignUp = ({ history }) => {

    // redux hooks
    const dispatch = useDispatch()
    const showError = useSelector(state => state.loginSignUp.showError)
    const errors = useSelector(state => state.loginSignUp.errors)

    // local state for controlled form
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
            // throw_error(userRes.msg)
            dispatch({ type: 'SHOW_ERRORS', showError: true, errors: userRes.msg})
        }


    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <About />
                </Col>
                <Col>
                    <h3>Sign Up</h3>                    
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group>
                            <Form.Control type='text' name='firstName' placeholder='* First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' name='lastName' placeholder='* Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' name='phoneNumber' placeholder='* Phone Number' required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='email' name='email' placeholder='* Email' required value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='password' name='password' placeholder='* Password' required value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button variant='outline-primary' type='submit'>Sign Up</Button>
                            </Col>
                        </Row>
                        <div>* Mandatory Fields</div>
                        { showError ? <ul>{errors.map(msg => <li key={errors.indexOf(msg)}>{msg}</li>)}</ul> : null}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(SignUp)