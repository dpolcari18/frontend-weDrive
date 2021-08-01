import React from 'react'

// redux 
import { useSelector, useDispatch } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

// APIs
import API from '../API'

const EmergencyContact = () => {

    // redux hooks
    const dispatch = useDispatch()
    const ecId = useSelector(state => state.emergencyContact.id)
    const firstName = useSelector(state => state.emergencyContact.firstName)
    const lastName = useSelector(state => state.emergencyContact.lastName)
    const email = useSelector(state => state.emergencyContact.email)
    const phone = useSelector(state => state.emergencyContact.phone)
    const editEc = useSelector(state => state.emergencyContact.edit)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        API.patchEmergencyContact(ecId, firstName, lastName, email, phone)

        dispatch({ type: 'SAVE_EC' })
    }

    const renderEmergencyContact = () => {
        return editEc ? 
            <>
                <Form id='edit-ec-form' 
                      onBlur={(e) => {if (!e.currentTarget.contains(e.relatedTarget)) {document.getElementById('edit-ec-form').requestSubmit()}}} 
                      onSubmit={(e) => handleSubmit(e)}
                      autoComplete='off'
                >
                    <Row>
                        <Col>
                            <Form.Control name='firstName' value={firstName} placeholder='First Name' onChange={(e) => dispatch({ type: 'SET_EC_FIRST', firstName: e.target.value }) } />
                        </Col>
                        <Col>
                            <Form.Control name='lastName' value={lastName} placeholder='Last Name' onChange={(e) => dispatch({ type: 'SET_EC_LAST', lastName: e.target.value }) } />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name='email' value={email} placeholder='Email' onChange={(e) => dispatch({ type: 'SET_EC_EMAIL', email: e.target.value }) } />
                        </Col>
                        <Col>
                            <Form.Control name='phone' value={phone} placeholder='Phone Number' onChange={(e) => dispatch({ type: 'SET_EC_PHONE', phone: e.target.value }) } />
                        </Col>
                    </Row>   
                </Form>
            </>
        : 
            <>
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
            </>
    }

    return (
        <Container className='styled-container'>
            {renderEmergencyContact()}
        </Container>
    )
}

export default EmergencyContact