import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// Redux 
import { connect } from 'react-redux'

// React-Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = ({ history, logout_user, loggedIn }) => {

    const handleLogout = () => {
        localStorage.removeItem('auth_key')
        logout_user()
        history.push('/')
    }

    return (
        <Navbar bg="light" variant="light">
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