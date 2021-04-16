import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Containers
import EmergencyContactList from './EmergencyContactList'

// Components
import User from '../components/User'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PencilSquare } from 'react-bootstrap-icons'

const Profile = () => {

    // redux hooks
    const dispatch = useDispatch()
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
        <Container>
             <Row className='profile-row'>
                <Col>
                    <h3>User Information <PencilSquare className='edit edit-icon' onClick={() => dispatch({ type: 'EDIT_USER' })} /></h3>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col className='col-md-9'>
                    <User />
                </Col>
                <Col>
                </Col>
            </Row>
            <Row className='profile-row'>
                <Col>
                    <EmergencyContactList />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile