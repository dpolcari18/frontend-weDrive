import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Containers
import EmergencyContactList from './EmergencyContactList'

// Components
import User from '../components/User'


const Profile = () => {

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
            <h1>PROFILE</h1>
            <User />
            <EmergencyContactList />
        </>
    )
}

export default Profile