import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchBar = ({ searchRoute }) => {

    // redux hooks
    const dispatch = useDispatch()
    const origin = useSelector(state => state.search.origin)
    const destination = useSelector(state => state.search.destination)

    return (
        <Container>
            <Form onSubmit={(e) => searchRoute(e) }>
                <Row>
                    <Col>
                        <Form.Group controlId="origin">
                            <Form.Control 
                                type="text" 
                                placeholder="Where are you coming from?"
                                value={origin} 
                                onChange={(e) => dispatch({ type: 'SET_ORIGIN', origin: e.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId='destination'>
                            <Form.Control 
                                type="text" 
                                placeholder="Where are you going?" 
                                value={destination} 
                                onChange={(e) => dispatch({ type: 'SET_DESTINATION', destination: e.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={1}>
                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SearchBar