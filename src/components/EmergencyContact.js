import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EmergencyContact = ({ ice }) => {

    return (
        <Container>
            <Row>
                <Col>
                    <div>First Name: {ice.first_name}</div>
                </Col>
                <Col>
                    <div>Last Name: {ice.last_name}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Email: {ice.email}</div>
                </Col>
                <Col>
                    <div>Phone Number: {ice.phone}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default EmergencyContact