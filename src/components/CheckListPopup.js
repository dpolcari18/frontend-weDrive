import React, { useState, useEffect } from 'react'

// Redux
import { useDispatch } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const WeatherPopup = () => {
    
    // redux hooks
    const dispatch = useDispatch()

    // local state
    const [interior, setInterior] = useState(false)
    const [exterior, setExterior] = useState(false)
    const [tires, setTires] = useState(false)
    const [lights, setLights] = useState(false)
    // check if all list items are checked => if true enable button
    const [allChecked, setAllChecked] = useState(false)

    useEffect (() => {
        
        // create array of state variables to test against
        const arr = [interior, exterior, tires, lights]

        // check if variable is true
        const isTrue = (i) => i === true 

        // check all variables in array
        const allTrue = arr.every(i => isTrue(i))

        // set state to true for enabling button if all true
        if (allTrue) {
            setAllChecked(true)
        } else {
            setAllChecked(false)
        }

    }, [interior, lights, exterior, tires])



    const closeChecklist = () => {
        dispatch({ type: 'CLOSE_CHECKLIST_POPUP' })
    }

    return (
        <div className="popup-box">
            <div className="box">
                <Container>
                    <Row>
                        <Col>
                            <h2>Vehicle Inspection Checklist</h2>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col>
                                <h4><Form.Check type='checkbox'
                                            label={'Tires'}
                                            check={tires}
                                            onChange={() => setTires(!tires)}
                                /></h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                Tire Pressure
                            </Col>
                            <Col>
                                Tread Depth
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                            Sidewall Bulges
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4><Form.Check type='checkbox'
                                                label={'Lights'}
                                                check={lights}
                                                onChange={() => setLights(!lights)} /></h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                Blinkers
                            </Col>
                            <Col>
                                Head Lights
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                High Beams
                            </Col>
                            <Col>
                                Brake Lights
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4><Form.Check type='checkbox'
                                                label={'Exterior'}
                                                check={exterior}
                                                onChange={() => setExterior(!exterior)} /></h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                Windshield Cracks
                            </Col>
                            <Col>
                                Dirty Windows
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                Windshield Wipers
                            </Col>
                            <Col>
                                Fluid Leaks on Ground
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                Last Oil Change
                            </Col>
                            <Col>
                                Wiper Fluid
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                Brake Pad Dust
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4><Form.Check type='checkbox'
                                                label={'Interior'}
                                                check={interior}
                                                onChange={() => setInterior(!interior)} /></h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                Mirrors
                            </Col>
                            <Col>
                                Head Rest Position
                            </Col>
                        </Row>
                        <Row  className='checklist'>
                            <Col>
                                Shoulder Strap Height
                            </Col>
                            <Col>
                                Fuel Level
                            </Col>
                        </Row>
                    </Form>
                    <Row id='finish-inspection'>
                        <Col>
                            <Button disabled={!allChecked} onClick={() => closeChecklist()}>Finish Inspection</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default WeatherPopup