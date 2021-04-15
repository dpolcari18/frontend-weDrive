import React from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// Components
import EmergencyContact from '../components/EmergencyContact'

// react-bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PencilSquare } from 'react-bootstrap-icons'

const EmergencyContactList = () => {

    // redux hooks
    const dispatch = useDispatch()
    const emergencyContacts = useSelector(state => state.emergencyContact.emergencyContacts)

    return (
            <>
            <Row>
                <Col>
                    <h3>Emergency Contact List <PencilSquare className='edit edit-icon' onClick={() => dispatch({ type: 'EDIT_EC' })} /></h3>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col md={9}>
                    {emergencyContacts.map(ice => <EmergencyContact key={ice.id} ice={ice} /> )}
                </Col>
                <Col>
                </Col>
            </Row>
        </>
    )
}

export default EmergencyContactList