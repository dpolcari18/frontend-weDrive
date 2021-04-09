import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EmergencyContact = (props) => {

    console.log(props)

    return (
        <Container>
            <Row>
                <Col>
                    <div>First Name: {props.ice.first_name}</div>
                </Col>
                <Col>
                    <div>Last Name: {props.ice.last_name}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Email: {props.ice.email}</div>
                </Col>
                <Col>
                    <div>Phone Number: {props.ice.phone}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default EmergencyContact