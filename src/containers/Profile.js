import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux'

// Containers
import EmergencyContactList from './EmergencyContactList'

// Components
import User from '../components/User'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Profile = () => {

    // redux hooks
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    const firstName = useSelector(state => state.user.firstName)
    const lastName = useSelector(state => state.user.lastName)

    // combine first and last names
    const fullName = firstName.concat(' ', lastName)
    
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
        <Container>
            <Row>
                <Col>
                    <h1>{fullName}'s Profile</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <User />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EmergencyContactList />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile