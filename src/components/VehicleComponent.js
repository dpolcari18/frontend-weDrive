import React, { useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// react-bootstrap
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { Trash } from 'react-bootstrap-icons'

// endpoints
const VEHICLE_URL = 'https://wedrive-backend-hosting.herokuapp.com/vehicles/'
// const VEHICLE_URL = 'http://localhost:3000/vehicles/'

const VehicleComponent = ({ car }) => {

    // redux hooks
    const dispatch = useDispatch()
    const editMileage = useSelector(state => state.vehicle.editMileage[0])
    const editId = useSelector(state => state.vehicle.editMileage[1])

    // local state
    const [mileage, setMileage] = useState(car.mileage)

    const deleteVehicle = async () => {
        const authKey = localStorage.getItem('auth_key')

        const delObj =  {
            headers: {
                'Content-Type': 'applications/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'DELETE'    
        }

        const delVeh = await fetch(VEHICLE_URL + car.id, delObj)
        const vehRes = await delVeh.json()

        dispatch({ type: 'REMOVE_MAINTENANCE_REPORTS', vehicle_id: car.id })
        dispatch({ type: 'REMOVE_VEHICLE', id: car.id })        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const authKey = localStorage.getItem('auth_key')

        const mileageObj = {
            vehicle: {
                mileage: mileage
            }
        }

        const updateObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'PATCH',
            body: JSON.stringify(mileageObj)
        }

        const patchVeh = await fetch(VEHICLE_URL + editId, updateObj)
        const patchRes = await patchVeh.json()

        dispatch({ type: 'REPLACE_VEHICLE', vehicle: patchRes.vehicle })
        dispatch({ type: 'STOP_EDIT_MILEAGE' })
    }

    const renderMileage = () => {
        if (editMileage && editId === car.id) {
            return (
                <Form id='edit-mileage'
                      onBlur={(e) => {if (!e.currentTarget.contains(e.relatedTarget)) {document.getElementById('edit-mileage').requestSubmit()}}}
                      onSubmit={(e) => handleSubmit(e)}
                >
                    <Form.Control 
                        value={mileage} 
                        onChange={(e) => setMileage(e.target.value)} 
                    />
                </Form>
            )
        } else {
            return (`${car.mileage} miles`)
        }
    }

    return (
        <Card style={{ width: '18rem' }} className='vehicle-card'>
            <Card.Body>
                <Card.Title>{car.make} - {car.model}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.year}</Card.Subtitle>
                <Card.Text>
                    {renderMileage()}
                </Card.Text>
                <Card.Footer>
                    <Card.Text>
                        <Card.Link className='edit' onClick={() => dispatch({ type: 'EDIT_MILEAGE', id: car.id })} >Update Mileage</Card.Link> | <Trash className='edit' onClick={() => deleteVehicle()} />
                    </Card.Text>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default VehicleComponent