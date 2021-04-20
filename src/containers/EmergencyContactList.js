import React from 'react'

// redux
import { useDispatch } from 'react-redux'

// Components
import EmergencyContact from '../components/EmergencyContact'

// react-bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PencilSquare } from 'react-bootstrap-icons'

const EmergencyContactList = () => {

    // redux hooks
    const dispatch = useDispatch()

    return (
            <>
            <Row>
                <Col>
                    <h3>Emergency Contact List <PencilSquare className='edit edit-icon' onClick={() => dispatch({ type: 'EDIT_EC' })} /></h3>
                </Col>
            </Row>
            <Row id='ec-box'>
                <Col md={9}>
                    <EmergencyContact />
                </Col>
            </Row>
        </>
    )
}

export default EmergencyContactList