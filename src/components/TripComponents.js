import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const TripComponents = ({ trip, start, end }) => {

    // convert date to readable date
    const converDate = () => {
        const year = trip.created_at.toString().split('').slice(0, 4).join('')
        const month = trip.created_at.toString().split('').slice(5, 7).join('')
        const day = trip.created_at.toString().split('').slice(8, 10).join('')
        const date = month + '-' + day + '-' + year
        return date
    }

    return (
        <Container className='trip'>
            <Row>
                <Col>
                <Card className='text-center'>
                    <Card.Header>
                        <h4>Trip from {start.city} to {end.city} on {converDate()}</h4>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <div>Travel Time: {Math.floor(trip.time/3600)} hrs {Math.floor((trip.time % 3600)/60)} min</div>
                                <div>Travel Time with Traffic: {Math.floor(trip.real_time/3600)} hrs {Math.floor((trip.real_time % 3600)/60)} min</div>
                                <div>Distance: {Math.floor(trip.distance*10)/10} miles</div>
                                <div>Estimated Fuel Usage: {Math.round(trip.fuel_usage*100)/100} gal</div>
                            </Col>
                            <Col>
                                <img alt='map'/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TripComponents