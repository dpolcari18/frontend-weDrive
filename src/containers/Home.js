import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Components
import SearchBar from '../components/SearchBar'
import TripDetails from '../components/TripDetails'
import Map from '../components/Map'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// API KEY
// const API_KEY = process.env.REACT_APP_MAP_API
const API_KEY = 'jGOGNEMHEi4MNjU7LSSVTTYOoozrHXRW'

const Home = () => {
    
    // redux hooks
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    const origin = useSelector(state => state.search.origin)
    const destination = useSelector(state => state.search.destination)
    
    // react-router-dom hooks
    const history = useHistory()

    // Confirm logged in
    useEffect(() => {
        if (loggedIn === true) {
            return
        } else if (localStorage.getItem('auth_key')) {
            return
        } else if (loggedIn === false) {
            history.push('/')
        }
    })

    // mount and unmount MQ scripts to head
    useEffect(() => {
        
        const firstScript = document.createElement('script')
        firstScript.src = 'https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js'
        firstScript.async = true
        // firstScript.onload = () => renderBlankMap()
        document.head.appendChild(firstScript)
    
        // mount link for mapQuest css
        const link = document.createElement('link')
        link.type = 'text/css'
        link.rel = ' stylesheet'
        link.href = 'https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css'
        document.head.appendChild(link)

        
        return () => {
            document.head.removeChild(firstScript)
            document.head.removeChild(link)
        }
    }, [])
    
    const renderBlankMap = () => {
        window.L.mapquest.key = API_KEY;
    
        let map = window.L.mapquest.map('map', {
            center: [30.2672, -97.7431],
            layers: window.L.mapquest.tileLayer('map'),
            zoom: 12
        })
    
        map.addControl(window.L.mapquest.control())
    }

    const loadMap = (e) => {

        e.preventDefault()
        
        // save search results before clearing form
        const start = origin
        const end = destination

        // reset search form
        dispatch({ type: 'RESET_SEARCH'})

        window.L.mapquest.key = API_KEY;

        let map = window.L.mapquest.map('map', {
            center: [30.2672, -97.7431],
            layers: window.L.mapquest.tileLayer('map'),
            zoom: 12
        });

        window.L.mapquest.directions().route({
            start: start,
            end: end
        });
            
        map.addControl(window.L.mapquest.control());
    }

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <SearchBar loadMap={() => loadMap}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TripDetails />
                    </Col>
                    <Col>
                        <Map />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home