import React, { useState } from 'react'

// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddVehiclePopup = () => {

    // local state
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [mileage, setMileage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('add vehicle')
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
                    <Button variant='outline-primary' type='submit'>Save</Button>
                </Form>
            </div>
        </div>
    )
}

export default AddVehiclePopup