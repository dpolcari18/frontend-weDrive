import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchBar = ({ loadMap }) => {

    // redux hooks
    const dispatch = useDispatch()
    const origin = useSelector(state => state.search.origin)
    const destination = useSelector(state => state.search.destination)

    return (
        <Container>
            {/* add back in loadMap(e) when getting closer!! */}
            <Form onSubmit={(e) => console.log('searching') }>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>Origin</Form.Label> */}
                            <Form.Control 
                                type="text" 
                                placeholder="Where are you coming from?"
                                value={origin} 
                                onChange={(e) => dispatch({ type: 'SET_ORIGIN', origin: e.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            {/* <Form.Label>Destination</Form.Label> */}
                            <Form.Control 
                                type="text" 
                                placeholder="Where are you going?" 
                                value={destination} 
                                onChange={(e) => dispatch({ type: 'SET_DESTINATION', destination: e.target.value})}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SearchBar