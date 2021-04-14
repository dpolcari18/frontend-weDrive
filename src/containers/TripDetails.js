import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// components
import RouteComponent from '../components/RouteComponent'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// endpoints
const TRIP_URL = 'http://localhost:3000/trips'
const START_EMAIL_URL = 'http://localhost:3000/starttrip/'
const END_EMAIL_URL = 'http://localhost:3000/endtrip/'

const TripDetails = ({ removeRoute }) => {

    // redux hooks 
    const dispatch = useDispatch()
    const locations = useSelector(state => state.locations.locations)
    const segments = useSelector(state => state.segments.segments)
    const tripDetails = useSelector(state => state.tripDetails)

    // update trip status
    const updateStatus = async (status) => {
        const authKey = localStorage.getItem('auth_key')

        const patchObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'PATCH',
            body: JSON.stringify({
                trip: {
                    id: tripDetails.tripId,
                    trip_status: status
                }
            })
        }

        const patchTrip = await fetch(TRIP_URL+'/'+tripDetails.tripId, patchObj)
        const tripRes = await patchTrip.json()

        if (status === 'Finished') { return tripRes.trip}
    }
    
    // email emergency contact
    const sendEmail = async (url) => {
        const authKey = localStorage.getItem('auth_key')

        const obj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'GET'
        }

        const fetchEmail = await fetch(url, obj)
    }

    // start trip
    const startTrip = () => {

        updateStatus('Started')

        // send email notification on start trip
        sendEmail((START_EMAIL_URL + tripDetails.tripId))

        dispatch({ type: 'OPEN_WEATHER_POPUP' })

        dispatch({ type: 'START_TRIP' })
    }

    // finish trip
    const finishTrip = async () => {

        const trip = await updateStatus('Finished')

        // send email confirming trip completed
        sendEmail((END_EMAIL_URL + tripDetails.tripId))

        // remove route from map
        removeRoute()

        // push trip details to state to display in trip log
        dispatch({ type: 'ADD_TRIP', trip: trip})

        dispatch({ type: 'END_TRIP'})
        dispatch({ type: 'CLEAR_LOCATIONS'})
        dispatch({ type: 'CLEAR_SEGMENTS'})
        dispatch({ type: 'CLEAR_WEATHER'})
    }

    // display prompt, trip details or trip segments
    const renderTripDetails = () => {
        switch (tripDetails.display) {
            case 'details':
                return (
                    <>
                        <Row>
                            <Col>
                                <h3>Trip Summary</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                From {locations.filter(loc => loc.start_end === 'Start')[0].city}
                            </Col>
                            <Col>
                                To {locations.filter(loc => loc.start_end === 'End')[0].city}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Estimated Time: {Math.floor(tripDetails.time/3600)} hrs {Math.floor((tripDetails.time % 3600)/60)} min
                            </Col>
                            <Col>
                                With Traffic: {Math.floor(tripDetails.realTime/3600)} hrs {Math.floor((tripDetails.realTime % 3600)/60)} min
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Tolls: {tripDetails.hasTolls ? "Yes" : "No"}
                            </Col>
                            <Col>
                                Estimated Fuel Usage: {tripDetails.fuelUsage} gal
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button id='start-trip' onClick={() => startTrip()}>Start Trip!</Button>
                            </Col>
                        </Row>
                    </>
                )
            case 'segments':
                return (
                    <Container className='scrollable'>
                        {segments.sort((a,b) => a.index_num - b.index_num).map(seg => <Row key={seg.id} ><Col key={seg.id} ><RouteComponent key={seg.id} segment={seg} /></Col></Row> )}
                        <Button id='end-trip' onClick={() => finishTrip()}>Complete Trip</Button>
                    </Container>
                )
            default:
                return (
                    <Row>
                        <Col>
                            <h3>Search a trip to begin!</h3>
                        </Col>
                    </Row>
                )

        }
        
    } 

    return (
        <Container>
            {renderTripDetails()}
        </Container>
    )
}

export default TripDetails