import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const RouteComponent = ({ segment }) => {
    return (
        <Card className='route'>
            <Card.Header>
                <Col>
                    {segment.index_num + 1}. {segment.instructions} for {Math.floor(segment.distance*10)/10} miles.
                </Col>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        {segment.direction}
                    </Col>
                    <Col md='auto'>
                        Time: {Math.floor(segment.time/3600)} hrs and {Math.floor((segment.time % 3600)/60)} min
                    </Col>
                    <Col>
                        <img src={segment.icon_url} alt='Depicting Directions' />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default RouteComponent