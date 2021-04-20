import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// Redux 
import { useSelector, useDispatch } from 'react-redux'

// React-Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BoxArrowRight } from 'react-bootstrap-icons'

// Styling
import Logo from '../images/horizontal_logo.png'

const NavBar = ({ history }) => {

    // redux hooks
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)

    // Logout user
    const handleLogout = () => {
        localStorage.removeItem('auth_key')
        localStorage.removeItem('user_id')
        dispatch({ type: 'LOGOUT_USER', loggedIn: false })
        dispatch({ type: 'RESET' })
        history.push('/')
    }

    // Conditionally render navbar based on loggedIn
    const checkLoggedIn = () => {
        if (loggedIn) {
            return (
                <Container>
                    <Row>
                        <Navbar id='nav' variant="light" fixed='top'>
                            <Col>
                                <Nav>
                                    <Nav.Link href='/home'>Home</Nav.Link>
                                    <Nav.Link href='/profile'>Profile</Nav.Link>
                                    <Nav.Link href='trips'>Trips</Nav.Link>
                                    <Nav.Link href='vehicles'>Vehicles</Nav.Link>
                                </Nav>
                            </Col>
                            <Col>
                                <Nav className='logo'>
                                    <Navbar.Brand><Link to='/home'><img src={Logo} alt='weDrive logo' /></ Link></Navbar.Brand>
                                </Nav>
                            </Col>
                            <Col>
                                <Nav className='logout'>
                                    <Nav.Link onClick={() => handleLogout()}>Logout <BoxArrowRight/></Nav.Link>
                                </Nav>
                            </Col>
                        </Navbar>
                    </Row>
                </Container>
            ) 
        } else {
            return(
                <Container>
                    <Row>
                        <Navbar id='nav' variant="light" fixed='top'>
                            <Col>
                                <Nav>
                                    <Nav.Link href='/about'>About</Nav.Link>
                                </Nav>
                            </Col>
                            <Col>
                                <Nav className='logo'>
                                    <Navbar.Brand><Link to='/home'><img src={Logo} alt='weDrive logo' /></ Link></Navbar.Brand>
                                </Nav>
                            </Col>
                            <Col>
                                <Nav id='login-link'>
                                    <Nav.Link href='/login'>Login</Nav.Link>
                                </Nav>
                            </Col>
                        </Navbar>
                    </Row>
                </Container>
            )
        }
    }

    return (
       <div>
           {checkLoggedIn()}
       </div>
    )
}

export default withRouter(NavBar)