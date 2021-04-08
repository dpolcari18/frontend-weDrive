import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

const Home = ({ loggedIn }) => {
    
    const history = useHistory()

    // Confirm logged in
    useEffect(() => {
        if (loggedIn === true) {
            return
        } else if (localStorage.getItem('auth_key')) {
            return
        } else if (loggedIn === false) {
            history.push('/')
        }
    })

    return(
        <div>
            <h1>HOME</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { loggedIn: state.loginSignUp.loggedIn }
}

export default connect(mapStateToProps)(Home)