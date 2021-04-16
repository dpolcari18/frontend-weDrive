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
    const locations = useSelector(state => state.trip.locations)

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
    // debugger
    return(
        <Container>
        <h1>Past Trips</h1>
            <Row>
                <Col>
                    {trips.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)).map(trip => <TripComponents 
                                            key={trip.id}
                                            trip={trip}
                                            start={locations.filter(loc => trip.id === loc.trip_id && loc.start_end === 'Start')[0]}
                                            end={locations.filter(loc => trip.id === loc.trip_id && loc.start_end === 'End')[0]}
                                        /> )}
                </Col>
            </Row>
        </Container>
    )
}

export default Trips