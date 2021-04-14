import React, { useState } from 'react'
import { withRouter } from 'react-router'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Endpoints
const SIGN_UP_URL = 'http://localhost:3000/users'
const EC_URL = 'http://localhost:3000/emergency_contacts'

const SignUp = ({ history }) => {

    // redux hooks
    const dispatch = useDispatch()
    const showError = useSelector(state => state.loginSignUp.showError)
    const errors = useSelector(state => state.loginSignUp.errors)

    // local state for controlled form
    // user info
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // ec info
    const [ecFirstName, setEcFirstName] = useState('')
    const [ecLastName, setEcLastName] = useState('')
    const [ecEmail, setEcEmail] = useState('')
    const [ecPhoneNumber, setEcPhoneNumber] = useState('')

    // Submit post request to register user
    const handleSubmit = async (e) => {
        e.preventDefault()

        // create user in db
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

        // receive user info and create emergency contact
        const newEc ={
            emergency_contact: {
                user_id: userRes.user_id,
                first_name: ecFirstName,
                last_name: ecLastName,
                email: ecEmail,
                phone: ecPhoneNumber
            }
        }

        const ecObj = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newEc)
        }

        const postEc = await fetch(EC_URL, ecObj)
        const ecRes = await postEc.json()

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
    
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row>
                    <Col>
                        <h2>User Information</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type='text' name='firstName' placeholder='* First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type='text' name='lastName' placeholder='* Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type='email' name='email' placeholder='* Email' required value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type='text' name='phoneNumber' placeholder='* Phone Number' required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type='password' name='password' placeholder='* Password' required value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Emergency Contact Information</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type='text' name='ecFirstName' placeholder='* First Name' required value={ecFirstName} onChange={(e) => setEcFirstName(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type='text' name='ecLastName' placeholder='* Last Name' required value={ecLastName} onChange={(e) => setEcLastName(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type='email' name='ecEmail' placeholder='* Email' required value={ecEmail} onChange={(e) => setEcEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type='text' name='ecPhoneNumber' placeholder='* Phone Number' required value={ecPhoneNumber} onChange={(e) => setEcPhoneNumber(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant='outline-primary' type='submit'>Sign Up</Button>
                    </Col>
                </Row>
                <div>* Mandatory Fields</div>
                { showError ? <ul>{errors.map(msg => <li key={errors.indexOf(msg)}>{msg}</li>)}</ul> : null}
            </Form>
        </Container>
    )
}

export default withRouter(SignUp)