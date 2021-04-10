import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import VehicleComponent from '../components/VehicleComponent'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const VehiclesList = () => {

    // redux hooks
    const vehicles = useSelector(state => state.vehicle.vehicles)

    return (
        <Container>
            <h4>Vehicles</h4>
            {vehicles.map(car => <Row><VehicleComponent key={car.id} car={car} /></Row> )}
        </Container>
    )
}

export default VehiclesList