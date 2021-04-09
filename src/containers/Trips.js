import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Components
import TripComponents from '../components/TripComponents'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Trips = () => {

    // redux hooks
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    const trips = useSelector(state => state.trip.trips)

    // react-router-dom hooks
    const history = useHistory()

    // Confirm logged in
    useEffect(() => {
        if (loggedIn === true) {
            return
        } else if (localStorage.getItem('auth_key')) {
            return
        } else if (loggedIn === false) {
            history.push('/')
        }
    })

    return(
        <Container>
        <h1>Trips</h1>
            <Row>
                <Col>
                    {trips.map(trip => <TripComponents trip={trip} /> )}
                </Col>
            </Row>
        </Container>
    )
}

export default Trips