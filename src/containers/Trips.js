import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Components
import TripComponents from '../components/TripComponents'

const Trips = () => {

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
            <h1>Trips</h1>
            <TripComponents />
        </>
    )
}

export default Trips