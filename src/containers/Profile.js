import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Components / Containers
import { EmergencyContactList, User } from '../Imports'

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
        <Container id='profile'>
             <Row>
                <Col>
                    <h3>User Information <PencilSquare className='edit edit-icon' onClick={() => dispatch({ type: 'EDIT_USER' })} /></h3>
                </Col>
            </Row>
            <Row id='user-row'>              
                <Col className='col-md-9'>
                    <User />
                </Col>              
            </Row>
            <Row id='ec-row'>
                <Col>
                    <EmergencyContactList />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile