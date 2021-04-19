import React from 'react'

// Redux
import { useDispatch } from 'react-redux'

// react-bootstrap
import Card from 'react-bootstrap/Card'
import { Trash } from 'react-bootstrap-icons'

// endpoints
const VEHICLE_URL = 'http://localhost:3000/vehicles/'

const VehicleComponent = ({ car }) => {

    // redux hooks
    const dispatch = useDispatch()

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

        dispatch({ type: 'REMOVE_VEHICLE', id: car.id })        
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{car.make} - {car.model}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.year}</Card.Subtitle>
                <Card.Text>
                {car.mileage} miles
                </Card.Text>
                <Trash className='edit' onClick={() => deleteVehicle()} />
            </Card.Body>
        </Card>
    )
}

export default VehicleComponent