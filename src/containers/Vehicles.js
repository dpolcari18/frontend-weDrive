import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Containers
import VehiclesList from './VehiclesList'
import MaintenanceReportList from './MaintenanceReportList'

const Vehicles = ({ loggedIn}) => {

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

const mapStateToProps = (state) => {
    return { loggedIn: state.loginSignUp.loggedIn }
}

export default connect(mapStateToProps)(Vehicles)