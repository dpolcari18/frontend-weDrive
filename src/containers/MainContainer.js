import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Containers
import Home from './Home'
import Landing from './Landing'
import NavBar from './NavBar'
import Profile from './Profile'
import Trips from './Trips'
import Vehicles from './Vehicles'

// Components
import SignUp from '../components/SignUp'

// Redux
import { useDispatch } from 'react-redux'

// endpoints
const USER_URL = 'http://localhost:3000/users'

const MainContainer = () => {

    // redux hooks
    const dispatch = useDispatch()

    // On refresh - refetch user information
    const refetchUser = async () => {
        const userId = localStorage.getItem('user_id')
        const authKey = localStorage.getItem('auth_key')

        const fetchObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }

        const fetchUser = await fetch(USER_URL+'/'+userId, fetchObj)
        const userRes = await fetchUser.json()
        console.log(userRes)

        dispatch({ type: 'SET_USER', user: userRes.user})
        dispatch({ type: 'SET_TRIPS', trips: userRes.user.trips})
        dispatch({ type: 'SET_VEHICLES', vehicles: userRes.user.vehicles})
        dispatch({ type: 'SET_MAINTENANCE_REPORTS', maintenanceReports: userRes.user.maintenance_reports})
        dispatch({ type: 'SET_EMERGENCY_CONTACTS', emergencyContacts: userRes.user.emergency_contacts})
    }

    // Maintain state logged in on refresh
    useEffect(() => {
        if (localStorage.getItem('auth_key')) {
            dispatch({type: 'LOGIN_USER', loggedIn: true})
            refetchUser()
        }
    }, [dispatch])

    return(
        <Router>
            <div>
                <NavBar />
                <Route exact path='/' render={() => <Landing /> } />
                <Route path='/signup' render={() => <SignUp /> } />
                <Route path='/home' render={() => <Home /> } />
                <Route path='/profile' render={() => <Profile /> } />
                <Route path='/trips' render={() => <Trips /> } />
                <Route path='/vehicles' render={() => <Vehicles /> } />
            </div>
        </Router>
    )
}

export default MainContainer