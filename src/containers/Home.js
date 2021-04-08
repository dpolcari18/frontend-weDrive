import React from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import About from '../components/About'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const Home = ({ signUp}) => {
    return (
        <div>
            <About />
            { signUp ? <SignUp /> : <Login />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { signUp: state.loginSignUp.signUp }
}

export default connect(mapStateToProps)(Home)