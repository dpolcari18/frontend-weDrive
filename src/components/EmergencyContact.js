import React from 'react'

// redux 
import { useSelector, useDispatch } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const EmergencyContact = () => {

    // redux hooks
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.emergencyContact.firstName)
    const lastName = useSelector(state => state.emergencyContact.lastName)
    const email = useSelector(state => state.emergencyContact.email)
    const phone = useSelector(state => state.emergencyContact.phone)
    const editEc = useSelector(state => state.emergencyContact.edit)

    const renderEmergencyContact = () => {
        return editEc ? 
            <>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control value={firstName} placeholder='First Name' onChange={(e) => dispatch({ type: 'SET_EC_FIRST', firstName: e.target.value }) } />
                        </Col>
                        <Col>
                            <Form.Control value={lastName} placeholder='Last Name' onChange={(e) => dispatch({ type: 'SET_EC_LAST', lastName: e.target.value }) } />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control value={email} placeholder='Email' onChange={(e) => dispatch({ type: 'SET_EC_EMAIL', email: e.target.value }) } />
                        </Col>
                        <Col>
                            <Form.Control value={phone} placeholder='Phone Number' onChange={(e) => dispatch({ type: 'SET_EC_PHONE', phone: e.target.value }) } />
                        </Col>
                    </Row>   
                </Form>
            </>
        : 
            <>
                <Row>
                    <Col>
                        First Name: {firstName}
                    </Col>
                    <Col>
                        Last Name: {lastName}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Email: {email}
                    </Col>
                    <Col>
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