import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// react-bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const MaintenanceComponent = ({ report }) => {

    // redux hooks
    const car = useSelector(state => state.vehicle.vehicles.filter(veh => veh.id === report.vehicle_id)[0])

    const convertDate = () => {
        const year = report.created_at.toString().split('').slice(0, 4).join('')
        const month = report.created_at.toString().split('').slice(5, 7).join('')
        const day = report.created_at.toString().split('').slice(8, 10).join('')
        const date = month + '-' + day + '-' + year
        return date
    }

    return (
        <div style={{width: '100%'}}>
            <Col>
                <Card style={{width: '100%'}}>
                    <h4 style={{paddingTop: '15px'}}><strong>{report.description}</strong></h4>
                    <h5>{car.make} {car.model}</h5>
                    <p style={{fontSize: 'larger', color: 'grey'}}>{report.notes} on <strong style={{color: '#8abd00'}}>{convertDate()}</strong> @ {report.mileage} miles</p>
                </Card>
            </Col>
        </div>
    )
}

export default MaintenanceComponent