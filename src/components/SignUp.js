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

// APIs
import API from '../API'

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

        // create new user
        const postUser = await API.postUser(firstName, lastName, email, phoneNumber, password)
        const userRes = await postUser.json()

        // get user info from above and create new emergency contact
        const postEc = await API.postEmergencyContact(userRes.user_id, ecFirstName, ecLastName, ecEmail, ecPhoneNumber)
        const ecRes = await postEc.json()

        // If success redirect to home for login or show errors
        if (userRes.status === 'Success') {
            alert(userRes.msg)
            history.push('/login')
        } else if (userRes.status === 'Failed') {
            // throw_error(userRes.msg)
            dispatch({ type: 'SHOW_ERRORS', showError: true, errors: userRes.msg})
        }


    }
    
    return (
        <Container id='sign-up-form'>
            <Form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
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