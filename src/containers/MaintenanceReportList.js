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
    const maintenanceReports = useSelector(state => state.maintenanceReport.maintenanceReports.filter(report => state.maintenanceReport.filteredReports.includes(report.id)))


    return (
        <Container>
            <h4>Maintenance Reports <PlusCircle className='edit' onClick={() => dispatch({ type: 'OPEN_MAIN_REPORT_FORM' })} /></h4>
            <h6>
                <select onChange={(e) => dispatch({ type: 'SET_REPORT_FILTER', filter: e.target.value })}>
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
                </select>
            </h6>
            {maintenanceReports.sort((a,b) => Date.parse(b.created_at) - Date.parse(a.created_at)).map(mainRep => <Row className='report' key={mainRep.id}><MaintenanceComponent key={mainRep.id} report={mainRep} /></Row>)}
        </Container>
    )
}

export default MaintenanceReportList