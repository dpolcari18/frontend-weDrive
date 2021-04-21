import React from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

// endpoints
const USER_URL = 'http://localhost:3000/users/'

const User = () => {

    // redux hooks
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.user.firstName)
    const lastName = useSelector(state => state.user.lastName)
    const email = useSelector(state => state.user.email)
    const phone = useSelector(state => state.user.phone)
    const editUser = useSelector(state => state.user.edit)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const authKey = localStorage.getItem('auth_key')
        const userId = localStorage.getItem('user_id')

        const user = {
            user: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone
            }
        }

        const userObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'PATCH',
            body: JSON.stringify(user)
        }
        
        const patchUser = await fetch(USER_URL + userId, userObj)

        const patchRes = await patchUser.json()
        
        dispatch({ type: 'SAVE_USER' })
    }


    const renderUser = () => {
        return editUser ? 
            <div>
                <Form id='edit-user-form'
                      onBlur={(e) => {if (!e.currentTarget.contains(e.relatedTarget)) {document.getElementById('edit-user-form').requestSubmit()}}}
                      onSubmit={(e) => handleSubmit(e)}
                >
                    <Row>
                        <Col>
                            <Form.Control value={firstName} placeholder='First Name' onChange={(e) => dispatch({ type: 'SET_USER_FIRST', firstName: e.target.value }) } />
                        </Col>
                        <Col>
                            <Form.Control value={lastName} placeholder='Last Name' onChange={(e) => dispatch({ type: 'SET_USER_LAST', lastName: e.target.value }) } />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control value={email} placeholder='Email' onChange={(e) => dispatch({ type: 'SET_USER_EMAIL', email: e.target.value }) } />
                        </Col>
                        <Col>
                            <Form.Control value={phone} placeholder='Phone Number' onChange={(e) => dispatch({ type: 'SET_USER_PHONE', phone: e.target.value }) } />
                        </Col>
                    </Row>                    
                </Form>
            </div>
        : 
            <div>
                <Row>
                    <Col className='user-col'>
                        First Name: {firstName}
                    </Col>
                    <Col className='user-col'>
                        Last Name: {lastName}
                    </Col>
                </Row>
                <Row>
                    <Col className='user-col'>
                        Email: {email}
                    </Col>
                    <Col className='user-col'>
                        Phone Number: {phone}
                    </Col>
                </Row>
            </div>
    }

    return (
        <Container className='styled-container'>
            {renderUser()}
        </Container>
    )
}

export default User