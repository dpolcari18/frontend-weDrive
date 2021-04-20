import React from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import MaintenanceComponent from '../components/MaintenanceComponent'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { PlusCircle } from 'react-bootstrap-icons'

const MaintenanceReportList = () => {

    // redux hooks
    const dispatch = useDispatch()
    const maintenanceReports = useSelector(state => state.maintenanceReport.maintenanceReports.filter(report => state.maintenanceReport.filteredReports.includes(report.id)))
    const vehicles = useSelector(state => state.vehicle.vehicles)

    const renderMaintenanceReports = () => {
        if (vehicles.length === 0) {
            return (
                <>
                    <h4>Maintenance Reports</h4>
                    <h4>You must add a vehicle before adding a maintenance Report</h4>
                </>
            )
        } else {
            return (
                <>
                    <h4>Maintenance Reports <PlusCircle className='edit highlight-text' onClick={() => dispatch({ type: 'OPEN_MAIN_REPORT_FORM' })} /></h4>
                    <h6 id='filter-title'>
                        <Form.Control as='select' id='maintenance-filter' onChange={(e) => dispatch({ type: 'SET_REPORT_FILTER', filter: e.target.value })}>
                            <option value='All'>Show All</option>
                            <option value='Air Filter'>Air Filter</option>
                            <option value='Battery'>Battery</option>
                            <option value='Brakes'>Brakes</option>
                            <option value='Car Wash'>Car Wash</option>
                            <option value='Engine Coolant'>Engine Coolant</option>
                            <option value='Oil Change'>Oil Change</option>
                            <option value='Other'>Other</option>
                            <option value='Spark Plugs'>Spark Plugs</option>
                            <option value='Tires'>Tires</option>
                            <option value='Windshield Wipers'>Windshield Wipers</option>
                        </Form.Control>
                    </h6>
                    {maintenanceReports.length === 0 ? <h4 style={{paddingBottom: '5px'}}>There are no maintenance reports for this type</h4> : maintenanceReports.sort((a,b) => Date.parse(b.created_at) - Date.parse(a.created_at)).map(mainRep => <Row className='report' key={mainRep.id}><MaintenanceComponent key={mainRep.id} report={mainRep} /></Row>)}
                </>
            )
        }
    }

    return (
        <Container>
            {renderMaintenanceReports()}
        </Container>
    )
}

export default MaintenanceReportList