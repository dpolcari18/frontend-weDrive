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

const MainContainer = () => {

    // redux hooks
    const dispatch = useDispatch()

    // On refresh - refetch user information
    const refetchUser = async () => {

    }

    // Maintain state logged in on refresh
    useEffect(() => {
        if (localStorage.getItem('auth_key')) {
            dispatch({type: 'LOGIN_USER', loggedIn: true})
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