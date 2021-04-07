import React from 'react'

// Redux 
import { connect } from 'react-redux'

const NavBar = ({ dispatch, loggedIn }) => {

    const handleLogout = () => {
        localStorage.removeItem('auth_key')
        dispatch({type: 'LOGOUT_USER', loggedIn: false})
    }

    return (
        <div>
            <h1>NavBar</h1>
            { loggedIn ? <button onClick={() => handleLogout()}>Logout</button> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { loggedIn: state.loggedIn }
}

export default connect(mapStateToProps)(NavBar)