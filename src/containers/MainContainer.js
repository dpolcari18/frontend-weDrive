import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Containers
import NavBar from './NavBar'

// Components
import Home from './Home'

// Redux
import { connect } from 'react-redux'

const MainContainer = ({ login_user }) => {

    // Maintain state logged in on refresh
    useEffect(() => {
        if (localStorage.getItem('auth_key')) {
            login_user()
        }
    }, [login_user])

    return(
        <Router>
            <div>
                <NavBar />
                <Route exact path='/' render={() => <Home />} />
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