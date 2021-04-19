import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const MaintenanceComponent = ({ report }) => {

    const converDate = () => {
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
                    <h5>{report.description}</h5>
                    <p>{report.notes} on {converDate()} @ {report.mileage} miles</p>
                </Card>
            </Col>
            <Col>
            </Col>
        </>
    )
}

export default MaintenanceComponent