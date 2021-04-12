import React from 'react'

// Components
import About from '../components/About'
import Login from '../components/Login'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Landing = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <About />
                </Col>
                <Col>
                    <Login />
                </Col>
            </Row>
        </Container>
    )
}

export default Landing