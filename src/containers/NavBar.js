import React from 'react'
import { withRouter } from 'react-router'

// Redux 
import { connect } from 'react-redux'

const NavBar = ({ history, logout_user, loggedIn }) => {

    const handleLogout = () => {
        localStorage.removeItem('auth_key')
        logout_user()
        history.push('/')
    }

    return (
        <div>
            <h1>NavBar</h1>
            { loggedIn ? <button onClick={() => handleLogout()}>Logout</button> : null}
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