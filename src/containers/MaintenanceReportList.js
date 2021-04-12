import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import MaintenanceComponent from '../components/MaintenanceComponent'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const MaintenanceReportList = () => {

    const maintenanceReports = useSelector(state => state.maintenanceReport.maintenanceReports)

    return (
        <Container>
            <h4>Maintenance Reports</h4>
            {maintenanceReports.map(mainRep => <Row key={mainRep.id}><MaintenanceComponent key={mainRep.id} report={mainRep} /></Row>)}
        </Container>
    )
}

export default MaintenanceReportList