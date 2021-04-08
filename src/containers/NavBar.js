import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// Redux 
import { useSelector, useDispatch } from 'react-redux'

// React-Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = ({ history }) => {

    // redux hooks
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)

    // Logout user
    const handleLogout = () => {
        localStorage.removeItem('auth_key')
        dispatch({ type: 'LOGOUT_USER', loggedIn: false })
        dispatch({ type: 'RESET' })
        history.push('/')
    }

    // Conditionally render navbar based on loggedIn
    const checkLoggedIn = () => {
        if (loggedIn) {
            return (
                <Navbar bg="light" variant="light" fixed='top'>
                    <Navbar.Brand><Link to='/home'>weDrive</ Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link to='/home'>Home</Link>
                        <Link to='/profile'>Profile</Link>
                        <Link to='trips'>Trips</Link>
                        <Link to='vehicles'>Vehicles</Link>
                        <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
                    </Nav>
                </Navbar>
            ) 
        } else {
            return(
                <Navbar bg="light" variant="light" fixed='top'>
                    <Navbar.Brand><Link to='/home'>weDrive</ Link></Navbar.Brand>
                </Navbar>
            )
        }
    }

    return (
       <div>
           {checkLoggedIn()}
       </div>
    )
}

export default withRouter(NavBar)