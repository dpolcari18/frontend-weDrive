import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Components
import TripComponents from '../components/TripComponents'

const Trips = ({ loggedIn }) => {

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
            <h1>Trips</h1>
            <TripComponents />
        </>
    )
}

const mapStateToProps = (state) => {
    return { loggedIn: state.loginSignUp.loggedIn }
}

export default connect(mapStateToProps)(Trips)