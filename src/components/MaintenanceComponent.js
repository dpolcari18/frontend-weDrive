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
        <>
            <Col>
            </Col>
            <Col className='col-md-9'>
                <Card>
                    <h5 style={{paddingTop: '15px'}}>{car.make} {car.model} - {report.description}</h5>
                    <p>{report.notes} on {convertDate()} @ {report.mileage} miles</p>
                </Card>
            </Col>
            <Col>
            </Col>
        </>
    )
}

export default MaintenanceComponent