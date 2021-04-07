import React from 'react'

// Provide react app access to store
import { Provider } from 'react-redux'

// Global Store
import store from '../store'

// Containers
import NavBar from './NavBar'

// Components
import About from '../components/About'
import Login from '../components/Login'

const MainContainer = () => {
    return(
        <Provider store={store}>
            <NavBar />
            <div>
                <About />
                <Login />
            </div>
        </Provider>
    )
}

export default MainContainer