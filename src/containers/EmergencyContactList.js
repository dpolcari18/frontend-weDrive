import React from 'react'

// redux
import { useSelector } from 'react-redux'

// Components
import EmergencyContact from '../components/EmergencyContact'

const EmergencyContactList = () => {

    // redux hooks
    const emergencyContacts = useSelector(state => state.emergencyContact.emergencyContacts)

    return (
        <>
            <h4>Emergency Contact List</h4>
            {emergencyContacts.map(ice => <EmergencyContact key={ice.id} ice={ice} /> )}
        </>
    )
}

export default EmergencyContactList