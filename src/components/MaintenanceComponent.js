import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MaintenanceComponent = ({ report }) => {

    const converDate = () => {
        const year = report.created_at.toString().split('').slice(0, 4).join('')
        const month = report.created_at.toString().split('').slice(5, 7).join('')
        const day = report.created_at.toString().split('').slice(8, 10).join('')
        const date = month + '-' + day + '-' + year
        return date
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h6>Report Type: {report.description}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    Maintenance On: {converDate()} @ {report.mileage} miles
                </Col>
                <Col>
                    Notes: {report.notes}
                </Col>
            </Row>
        </Container>
    )
}

export default MaintenanceComponent