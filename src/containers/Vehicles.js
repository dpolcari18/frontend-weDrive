import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Components / Containers
import { AddMaintenanceReportPopup, AddVehiclePopup, MaintenanceReportList, VehiclesList } from '../Imports'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Vehicles = () => {
    
    // redux hooks
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    const addVehiclePopup = useSelector(state => state.vehicle.addForm)
    const addMainReportPopup = useSelector(state => state.maintenanceReport.addForm)
    
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
            <Container className='veh-con'>
                <Row className='vehicles'>
                    <Col>
                        <h1>Vehicle Maintenance Tracker</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='veh-con'>
                <Row className='vehicles'>
                    <Col>
                        <VehiclesList />
                    </Col>
                </Row>
            </Container>
            <Container className='veh-con'>
                <Row className='vehicles'>
                    <Col>
                        <MaintenanceReportList />
                    </Col>
                </Row>
            </Container>
            <Container>
                {addVehiclePopup ?  <AddVehiclePopup/> : null }
                {addMainReportPopup ? <AddMaintenanceReportPopup /> : null} 
            </Container>
        </>
    )
}

export default Vehicles