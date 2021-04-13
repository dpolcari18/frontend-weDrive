import React from 'react'

// redux
import { useSelector } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const User = () => {

    // redux hooks
    const firstName = useSelector(state => state.user.firstName)
    const lastName = useSelector(state => state.user.lastName)
    const email = useSelector(state => state.user.email)
    const phone = useSelector(state => state.user.phone)

    return (
        <Container className='styled-container'>
            <Row>
                <Col>
                    <div>First Name: {firstName}</div>
                </Col>
                <Col>
                    <div>Last Name: {lastName}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Email: {email}</div>
                </Col>
                <Col>
                    <div>Phone Number: {phone}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default User