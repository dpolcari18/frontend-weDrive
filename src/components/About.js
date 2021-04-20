import React from 'react'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/esm/Nav'

const About = () => {
    return (
        <div id='about-con'>
            <Container>
                <Row>
                    <Col className='about'>
                        <h2>About weDrive</h2>
                        <p> At <strong>weDrive</strong> we aim to <strong className='highlight-text'>mitigate</strong> the risks associated with driving by providing the information necessary to make <strong className='highlight-text'>smart driving decisions</strong> before you get on the road all while keeping your loved ones <strong className='highlight-text'>informed</strong> of your whereabouts.</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>            
                    <Col className='about'>
                        <h4>Information Provided</h4>
                        <ul style={{'listStyle': 'none'}}>
                            <li>Directions</li>
                            <li>Traffic Conditions</li>
                            <li>Weather Conditions</li>
                            <li>Vehicle Inspection Checklist</li>
                            <li>Vehicle Maintenance Tracker</li>
                        </ul>
                    </Col>
                    <Col className='about'>   
                        <h4>Emergency Contacts</h4>
                        <p>While we strive to reduce the risks of driving, we understand it's impossible to reduce that risk to zero. That's why we make sure whenever you are driving, your emergency contact is <strong className='highlight-text'>notified</strong> via email anytime you start a trip.</p>
                        <p>They are provided with your <strong className='highlight-text'>planned route</strong>, <strong className='highlight-text'>departure time</strong> and <strong className='highlight-text'>estimated arrival time</strong>. Upon your safe arrival we notify them again to let them know you arrived safely!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About