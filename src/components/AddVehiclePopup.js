import React, { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'

// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// APIs
import API from '../API'

const AddVehiclePopup = () => {

    // local state
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [mileage, setMileage] = useState('')

    // redux hooks
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const postVeh = await API.postVehicle(make, model, year, mileage)
        const vehRes = await postVeh.json()

        // add vehicle to state
        dispatch ({ type: 'ADD_VEHICLE', vehicle: vehRes.vehicle})
        // close popup
        dispatch({ type: 'CLOSE_ADD_VEHICLE_FORM' })
    }

    return (
        <div className="popup-box">
            <div className="box">
                <h2>Add Vehicle</h2>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Control 
                            placeholder='Vehicle Make'
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            placeholder='Vehicle Model'
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            placeholder='Year'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            placeholder='Mileage'
                            value={mileage}   
                            onChange={(e) => setMileage(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className='buttons'>
                        <Button variant='secondary' onClick={() => dispatch({ type: 'CLOSE_ADD_VEHICLE_FORM' })}>Cancel</Button>
                        <Button variant='outline-primary' type='submit'>Save</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default AddVehiclePopup