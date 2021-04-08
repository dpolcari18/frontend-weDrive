import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Containers
import VehiclesList from './VehiclesList'
import MaintenanceReportList from './MaintenanceReportList'

const Vehicles = () => {
    
    // redux hooks
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    
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
            <h1>Vehicles</h1>
            <VehiclesList />
            <MaintenanceReportList />
        </>
    )
}

export default Vehicles