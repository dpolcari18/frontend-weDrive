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
            <Row className='landing-row-one'>
                <Col>
                    <h1 id='first-about'><strong>Prepare For Your Trip Today</strong></h1>
                </Col>
            </Row>
            <Row className='landing-row-two'>
                <Col>
                    <h3 >An Informed Driver is a Smart Driver. A Smart Driver is a Safe Driver.</h3>
                    <h1>At <strong style={{color: '#007ec7'}}>weDrive</strong> Your Safety is our Priority</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant='primary' size='lg' onClick={() => history.push('/signup')} >Get Started Now</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Landing)