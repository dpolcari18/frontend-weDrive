import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Containers
import NavBar from './NavBar'

// Components
import About from '../components/About'
import Login from '../components/Login'

// Redux
import { connect } from 'react-redux'

const MainContainer = ({ dispatch }) => {

    useEffect(() => {
        if (localStorage.getItem('auth_key')) {
            dispatch({type: 'LOGIN_USER', loggedIn: true})
        }
    }, [])

    return(
        <Router>
            <div>
                <NavBar />
                <div>
                    <About />
                    <Login />
                </div>
            </div>
        </Router>
    )
}

export default connect()(MainContainer)