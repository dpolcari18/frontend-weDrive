import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const VehicleComponent = ({ car }) => {
    return (
        <Container>
            <Row>
                <Col>
                    Make: {car.make}
                </Col>
                <Col>
                    Model: {car.model}
                </Col>
            </Row>
            <Row>
                <Col>
                    Year: {car.year}
                </Col>
                <Col>
                    Mileage: {car.mileage}
                </Col>
            </Row>
        </Container>
    )
}

export default VehicleComponent