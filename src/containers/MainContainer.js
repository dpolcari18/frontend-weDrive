import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components / Containers
import { About, Demo, Home, Landing, Login, NavBar, Profile, SignUp, Trips, Vehicles } from '../Imports'

// APIs
import API from '../API'

// Redux
import { useDispatch } from 'react-redux'

const MainContainer = () => {
    
    // redux hooks
    const dispatch = useDispatch()

    // On refresh - refetch user information
    const refetchUser = async () => {
    
        const userRes = await API.fetchUser()
        const userInfo = await userRes.json()

        dispatch({ type: 'SET_USER', user: userInfo.user})
        dispatch({ type: 'SET_TRIPS', trips: userInfo.user.trips, locations: userInfo.user.locations})
        dispatch({ type: 'SET_VEHICLES', vehicles: userInfo.user.vehicles})
        dispatch({ type: 'SET_MAINTENANCE_REPORTS', maintenanceReports: userInfo.user.maintenance_reports})
        dispatch({ type: 'SET_EMERGENCY_CONTACTS', emergencyContacts: userInfo.user.emergency_contacts})
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
            <div id='home-container'>
                <NavBar />
                <Route exact path='/' render={() => <Landing /> } />
                <Route path='/about' render={() => <About /> } />
                <Route path='/demo' render={() => <Demo /> } />
                <Route path='/login' render={() => <Login /> } />
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