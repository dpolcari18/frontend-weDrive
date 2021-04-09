import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import MaintenanceComponent from '../components/MaintenanceComponent'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MaintenanceReportList = () => {

    const maintenanceReports = useSelector(state => state.maintenanceReport.maintenanceReports)

    return (
        <Container>
            <h4>Maintenance Reports</h4>
            {maintenanceReports.map(mainRep => <Row><MaintenanceComponent report={mainRep} /></Row>)}
        </Container>
    )
}

export default MaintenanceReportList