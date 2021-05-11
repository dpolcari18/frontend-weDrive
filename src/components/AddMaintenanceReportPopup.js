import React, { useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// endpoints
const REPO_URL = 'https://wedrive-backend-hosting.herokuapp.com/maintenance_reports/'
// const REPO_URL = 'http://localhost:3000/maintenance_reports/'

const AddMaintenanceReportPopup = () => {
    
    // local state
    const [vehicleId, setVehicleId] = useState('Select Vehicle')
    const [type, setType] = useState('Report Type')
    const [mileage, setMileage] = useState('')
    const [notes, setNotes] = useState('')

    // redux hooks
    const dispatch = useDispatch()
    const vehicles = useSelector(state => state.vehicle.vehicles)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const authKey = localStorage.getItem('auth_key')

        const mainRepoObj = {
            maintenance_report: {
                vehicle_id: vehicleId,
                description: type,
                notes: notes,
                mileage: mileage
            }
        }

        const postObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'POST',
            body: JSON.stringify(mainRepoObj)
        }

        const postRepo = await fetch(REPO_URL, postObj)
        const repoRes = await postRepo.json()

        
        dispatch({ type: 'ADD_MAIN_REPORT', maintenanceReport: repoRes.maintenance_report})

        dispatch({ type: 'CLOSE_MAIN_REPORT_FORM' })
    } 

    return (
        <div className="popup-box">
            <div className="box">
                <h2>New Maintenance Report</h2>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Control as='select' value={vehicleId} onChange={(e) => setVehicleId(e.target.value)}>
                            <option disabled value='Select Vehicle'>Select Vehicle</option>
                            {vehicles.map(veh => <option key={veh.id} value={veh.id}>{veh.make} - {veh.model}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as='select' value={type} onChange={(e) => setType(e.target.value)}>
                            <option disabled value='Report Type'>Report Type</option>
                            <option value={'Air Filter'}>Air Filter</option>
                            <option value={'Battery'}>Battery</option>
                            <option value={'Brakes'}>Brakes</option>
                            <option value={'Car Wash'}>Car Wash</option>
                            <option value={'Engine Coolant'}>Engine Coolant</option>
                            <option value={'Oil Change'}>Oil Change</option>
                            <option value={'Other'}>Other</option>
                            <option value={'Spark Plugs'}>Spark Plugs</option>
                            <option value={'Tires'}>Tires</option>
                            <option value={'Windshield Wipers'}>Windshield Wipers</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            placeholder='Mileage' 
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            placeholder='Notes' 
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='buttons'>
                        <Button variant='secondary' onClick={() => dispatch({ type: 'CLOSE_MAIN_REPORT_FORM' })}>Cancel</Button>
                        <Button variant='outline-primary' type='submit'>Add Report</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default AddMaintenanceReportPopup