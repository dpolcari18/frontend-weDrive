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

const MainContainer = ({ login_user, loggedIn }) => {

    // Maintain state logged in on refresh
    useEffect(() => {
        if (localStorage.getItem('auth_key')) {
            login_user()
        }
    }, [login_user])

    // Check if auth_key is stored in local storage before routing
    const checkLoggedIn = () => {
        return loggedIn  ? true : false
    }

    return(
        <Router>
            <div>
                <NavBar />
                <Route exact path='/' render={() => <Landing />} />
                <Route path='/signup' render={() => <SignUp />} />
                <Route path='/home' render={() => { return checkLoggedIn() ? <Home /> : <Redirect to='/' />}} />
                <Route path='/profile' render={() => { return checkLoggedIn() ? <Profile /> : <Redirect to='/' />}} />
                <Route path='/trips' render={() => { return checkLoggedIn() ? <Trips /> : <Redirect to='/' />}} />
                <Route path='/vehicles' render={() => { return checkLoggedIn() ? <Vehicles /> : <Redirect to='/' />}} />
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return { loggedIn: state.loginSignUp.loggedIn}
}

const mapDispatchToProps = (dispatch) => {
    return {
        login_user: () => dispatch({type: 'LOGIN_USER', loggedIn: true})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)