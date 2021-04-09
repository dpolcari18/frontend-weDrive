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

const TripDetails = () => {

    // redux hooks 
    const dispatch = useDispatch()
    const locations = useSelector(state => state.locations.locations)
    const segments = useSelector(state => state.segments.segments)

    // if locations === [] render message else render trip details
    const renderTripDetails = () => {
        
        if (locations.length === 0) { 
            return (
                <Row>
                    <Col>
                        <h3>Search a trip to begin!</h3>
                    </Col>
                </Row>
            )
        } else {
            return (
                <>
                    {segments.sort((a,b) => a.index_num - b.index_num).map(seg => <Row><Col><RouteComponent key={seg.id} segment={seg} /></Col></Row> )}
                    <Button>Start Trip!</Button>
                </>
            )
        }
    }

    return (
        <Container>
            <h4>Trip Details</h4>
            {renderTripDetails()}
        </Container>
    )
}

export default TripDetails