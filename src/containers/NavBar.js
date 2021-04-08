import React from 'react'

// Redux 
import { connect } from 'react-redux'

const NavBar = ({ logout_user, loggedIn }) => {

    const handleLogout = () => {
        localStorage.removeItem('auth_key')
        logout_user()
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)