import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Components
import SearchBar from '../components/SearchBar'
import TripDetails from '../components/TripDetails'
import Map from '../components/Map'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    
    // redux hooks
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    
    // react-router-dom hooks
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
            <Container>
                <Row>
                    <Col>
                        <SearchBar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TripDetails/>
                    </Col>
                    <Col>
                        <Map/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home