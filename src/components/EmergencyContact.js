import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EmergencyContact = ({ ice }) => {

    return (
        <Container className='styled-container'>
            <Row>
                <Col xs={2}>
                </Col>
                <Col>
                    First Name: {ice.first_name}
                </Col>
                <Col>
                    Last Name: {ice.last_name}
                </Col>
                <Col xs={2}>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                </Col>
                <Col>
                    Email: {ice.email}
                </Col>
                <Col>
                    Phone Number: {ice.phone}
                </Col>
                <Col xs={2}>
                </Col>
            </Row>
        </Container>
    )
}

export default EmergencyContact