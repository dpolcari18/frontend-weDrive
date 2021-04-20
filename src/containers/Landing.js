import React from 'react'
import { withRouter } from 'react-router'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Landing = ({ history }) => {
    return (
        <Container>
            <Row className='landing-row'>
                <Col>
                    <h1 style={{color: 'white'}} >PREPARE FOR YOUR TRIP TODAY</h1>
                </Col>
            </Row>
            <Row className='landing-row'>
                <Col>
                    <h3 style={{color: 'white'}} >An Informed Driver is a Smart Driver. A Smart Driver is a Safe Driver.</h3>
                    <h1 style={{color: 'white'}} >At weDrive Your Safety is our Priority</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant='primary' onClick={() => history.push('/signup')} >Get Started Today</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Landing)