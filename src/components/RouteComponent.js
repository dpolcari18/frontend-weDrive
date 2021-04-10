import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RouteComponent = ({ segment }) => {
    return (
        <Container>
            <Row>
                <Col>
                    {segment.index_num + 1}. {segment.instructions} for {Math.floor(segment.distance*10)/10} miles.
                </Col>
            </Row>
            <Row>
                <Col>
                    Direction: {segment.direction}
                </Col>
                <Col>
                    Est. Time: {Math.floor(segment.time/3600)} hrs and {Math.floor((segment.time % 3600)/60)} min
                </Col>
                <Col>
                    <img src={segment.icon_url} alt='Depicting Directions' />
                </Col>
            </Row>
        </Container>
    )
}

export default RouteComponent