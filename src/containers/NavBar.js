import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// Redux 
import { connect, Provider } from 'react-redux'

// React-Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = ({ history, logout_user, loggedIn }) => {

    // Logout user
    const handleLogout = () => {
        localStorage.removeItem('auth_key')
        logout_user()
        history.push('/')
    }

    // Conditionally render navbar based on loggedIn
    const checkLoggedIn = () => {
        if (loggedIn) {
            return (
                <Navbar bg="light" variant="light" fixed='top'>
                    <Navbar.Brand><Link to='/home'>weDrive</ Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/profile'>Profile</Link></Nav.Link>
                        <Nav.Link><Link to='trips'>Trips</Link></Nav.Link>
                        <Nav.Link><Link to='vehicles'>Vehicles</Link></Nav.Link>
                        <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
                    </Nav>
                </Navbar>
            ) 
        } else {
            return(
                <Navbar bg="light" variant="light">
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

const mapStateToProps = (state) => {
    return { loggedIn: state.loginSignUp.loggedIn }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout_user: () => dispatch({type: 'LOGOUT_USER', loggedIn: false})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))