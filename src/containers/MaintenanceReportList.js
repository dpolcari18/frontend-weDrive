import React from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import MaintenanceComponent from '../components/MaintenanceComponent'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { PlusCircle } from 'react-bootstrap-icons'

const MaintenanceReportList = () => {

    // redux hooks
    const dispatch = useDispatch()
    const maintenanceReports = useSelector(state => state.maintenanceReport.maintenanceReports)

    return (
        <Container>
            <h4>Maintenance Reports <PlusCircle className='edit' onClick={() => dispatch({ type: 'OPEN_MAIN_REPORT_FORM' })} /></h4>
            {maintenanceReports.sort((a,b) => Date.parse(b.created_at) - Date.parse(a.created_at)).map(mainRep => <Row key={mainRep.id}><MaintenanceComponent key={mainRep.id} report={mainRep} /></Row>)}
        </Container>
    )
}

export default MaintenanceReportList