import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Components
import SearchBar from '../components/SearchBar'
import TripDetails from '../components/TripDetails'
import Map from '../components/Map'

const Home = () => {
    
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
        <div>
            <h1>HOME</h1>
            <SearchBar/>
            <TripDetails/>
            <Map/>
        </div>
    )
}

export default Home