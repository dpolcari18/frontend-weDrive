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

    // local state for popup
    const [tirePressure, setTirePressure] = useState(false)
    const [treadDepth, setTreadDepth] = useState(false)
    const [tireBulges, setTireBulges] = useState(false)
    const [blinkers, setBlinkers] = useState(false)
    const [headlights, setHeadlights] = useState(false)
    const [highBeams, setHighBeams] = useState(false)
    const [brakeLights, setBrakeLights] = useState(false)
    const [windshieldCracks, setWindshieldCracks] = useState(false)
    const [dirtyWindows, setDirtyWindows] = useState(false)
    const [wiperCondition, setWiperCondition] = useState(false)
    const [drippingFluid, setDrippingFluid] = useState(false)
    const [mirrors, setMirrors] = useState(false)
    const [headRest, setHeadRest] = useState(false)
    const [shoulderStrap, setShoulderStrap] = useState(false)
    const [oilChange, setOilChange] = useState(false)
    const [wiperFluid, setWiperFluid] = useState(false)
    const [brakeDust, setBrakeDust] = useState(false)
    // check if all list items are checked => if true enable button
    const [allChecked, setAllChecked] = useState(false)

    useEffect (() => {
        
        // create array of state variables to test against
        const arr = [tirePressure, treadDepth, tireBulges, blinkers, headlights, highBeams, brakeLights, windshieldCracks, dirtyWindows, wiperCondition, drippingFluid, mirrors, headRest, shoulderStrap, oilChange, wiperFluid, brakeDust]

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

    }, [tirePressure, treadDepth, tireBulges, blinkers, headlights, highBeams, brakeLights, windshieldCracks, dirtyWindows, wiperCondition, drippingFluid, mirrors, headRest, shoulderStrap, oilChange, wiperFluid, brakeDust])


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
                            <h2>Pre-Journey Checklist</h2>
                        </Col>
                    </Row>
                    <Form>
                        <Row>
                            <Col>
                                <h4>Tires</h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox'
                                            label={'Tire Pressure'} 
                                            checked={tirePressure} 
                                            onChange={() => setTirePressure(!tirePressure)} 
                                    />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Tread Depth'}
                                            checked={treadDepth}
                                            onChange={() => setTreadDepth(!treadDepth)} 
                                    />
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Sidewall Bulges'}
                                            checked={tireBulges}
                                            onChange={() => setTireBulges(!tireBulges)}
                                             />
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Lights</h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox'
                                            label={'Blinkers'} 
                                            checked={blinkers} 
                                            onChange={() => setBlinkers(!blinkers)} 
                                    />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox'
                                            label={'Head Lights'} 
                                            checked={headlights} 
                                            onChange={() => setHeadlights(!headlights)} 
                                    />
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'High Beams'}
                                            checked={highBeams}
                                            onChange={() => setHighBeams(!highBeams)} 
                                    />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Brake Lights'}
                                            checked={brakeLights}
                                            onChange={() => setBrakeLights(!brakeLights)}
                                             />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Exterior</h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox'
                                            label={'Windshield Cracks'} 
                                            checked={windshieldCracks} 
                                            onChange={() => setWindshieldCracks(!windshieldCracks)} 
                                    />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox'
                                            label={'Dirty Windows'} 
                                            checked={dirtyWindows} 
                                            onChange={() => setDirtyWindows(!dirtyWindows)} 
                                    />
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Windshield Wipers'}
                                            checked={wiperCondition}
                                            onChange={() => setWiperCondition(!wiperCondition)} 
                                    />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Fluid Leaks on Ground'}
                                            checked={drippingFluid}
                                            onChange={() => setDrippingFluid(!drippingFluid)}
                                             />
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Last Oil Change'}
                                            checked={oilChange}
                                            onChange={() => setOilChange(!oilChange)} 
                                    />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Wiper Fluid'}
                                            checked={wiperFluid}
                                            onChange={() => setWiperFluid(!wiperFluid)}
                                             />
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Brake Pad Dust'}
                                            checked={brakeDust}
                                            onChange={() => setBrakeDust(!brakeDust)} 
                                    />
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Interior</h4>
                            </Col>
                        </Row>
                        <Row className='checklist'>
                            <Col>
                                <Form.Check type='checkbox'
                                            label={'Mirrors'} 
                                            checked={mirrors} 
                                            onChange={() => setMirrors(!mirrors)} 
                                    />
                            </Col>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Head Rest Position'}
                                            checked={headRest}
                                            onChange={() => setHeadRest(!headRest)} 
                                    />
                            </Col>
                        </Row>
                        <Row  className='checklist'>
                            <Col>
                                <Form.Check type='checkbox' 
                                            label={'Shoulder Strap Height'}
                                            checked={shoulderStrap}
                                            onChange={() => setShoulderStrap(!shoulderStrap)}
                                             />
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Form>
                    <Row>
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