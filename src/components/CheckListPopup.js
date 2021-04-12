import React from 'react'

// Redux
import { useDispatch } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const WeatherPopup = () => {

    const dispatch = useDispatch()

    const closeChecklist = () => {
        dispatch({ type: 'CLOSE_CHECKLIST_POPUP' })
    }

    return (
        <div className="popup-box">
            <div className="box">
                <Container>
                    <Row>
                        <Col>
                            CHECKLIST
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={() => closeChecklist()}>Finish Inspection</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default WeatherPopup