import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

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
import { connect } from 'react-redux'

const MainContainer = ({ login_user }) => {

    // Maintain state logged in on refresh
    useEffect(() => {
        if (localStorage.getItem('auth_key')) {
            login_user()
        }
    }, [login_user])

    // Check if auth_key is stored in local storage before routing
    const loggedIn = async () => {
        const confirmed = await localStorage.getItem('auth_key') ? true : false
        return confirmed
    }

    return(
        <Router>
            <div>
                <NavBar />
                <Route exact path='/' render={() => <Landing />} />
                <Route path='/signup' render={() => <SignUp />} />
                <Route path='/home' render={() => { loggedIn() ? <Home /> : <Redirect to='/' />}} />
                <Route path='/profile' render={() => <Profile />} />
                <Route path='/trips' render={() => <Trips />} />
                <Route path='/vehicles' render={() => <Vehicles />} />
            </div>
        </Router>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login_user: () => dispatch({type: 'LOGIN_USER', loggedIn: true})
    }
}

export default connect(null, mapDispatchToProps)(MainContainer)