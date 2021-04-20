import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Components
import VehicleComponent from '../components/VehicleComponent'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PlusCircle } from 'react-bootstrap-icons'

const VehiclesList = () => {

    // redux hooks
    const dispatch = useDispatch()
    const vehicles = useSelector(state => state.vehicle.vehicles)

    return (
        <Container>
            <Col>
                <h4>Vehicles <PlusCircle className='edit highlight-text' onClick={() => dispatch({ type: 'OPEN_ADD_VEHICLE_FORM' })} /></h4>
                <Row>
                    {vehicles.length !== 0 ? vehicles.map(car => <Col key={car.id} className='vehicle-list-col'><VehicleComponent key={car.id} car={car} /></Col> ) : <Col><h3>Add Vehicle To Begin</h3></Col>}                    
                </Row>
            </Col>
        </Container>
    )
}

export default VehiclesList