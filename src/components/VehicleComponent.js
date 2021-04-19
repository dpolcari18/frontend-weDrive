import React from 'react'

// react-bootstrap
import Card from 'react-bootstrap/Card'

const VehicleComponent = ({ car }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{car.make} - {car.model}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{car.year}</Card.Subtitle>
                <Card.Text>
                {car.mileage} miles
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default VehicleComponent