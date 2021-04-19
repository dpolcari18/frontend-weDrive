import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Containers
import VehiclesList from './VehiclesList'
import MaintenanceReportList from './MaintenanceReportList'

// Components
import AddVehiclePopup from '../components/AddVehiclePopup'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Vehicles = () => {
    
    // redux hooks
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    const addVehiclePopup = useSelector(state => state.vehicle.addForm)
    
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
        <>
            <Container>
                <h1>Vehicle Maintenance Tracker</h1>
                <Row id='vehicle-row'>
                    <Col>
                        <VehiclesList />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MaintenanceReportList />
                    </Col>
                </Row>
            </Container>
            <Container>
                {addVehiclePopup ?  <AddVehiclePopup/> : null } 
            </Container>
        </>
    )
}

export default Vehicles