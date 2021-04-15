import React from 'react'

// redux
import { useSelector } from 'react-redux'

// Components
import EmergencyContact from '../components/EmergencyContact'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PencilSquare } from 'react-bootstrap-icons'

const EmergencyContactList = () => {

    // redux hooks
    const emergencyContacts = useSelector(state => state.emergencyContact.emergencyContacts)

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Emergency Contact List <PencilSquare className='edit edit-icon' /></h3>
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
        </Container>
    )
}

export default EmergencyContactList