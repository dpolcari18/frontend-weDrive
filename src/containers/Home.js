import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Containers
import TripDetails from './TripDetails'

// Components
import SearchBar from '../components/SearchBar'
import Map from '../components/Map'
import WeatherPopUp from '../components/WeatherPopUp'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Endpoints
const ROUTE_URL = 'http://localhost:3000/routes'
const WEATHER_URL = 'http://localhost:3000/weather'
const TRIP_URL = 'http://localhost:3000/trips'
const LOCATION_URL = 'http://localhost:3000/locations'
const SEGMENT_URL = 'http://localhost:3000/segments'

// API KEY
// const API_KEY = process.env.REACT_APP_MAP_API
const API_KEY = 'jGOGNEMHEi4MNjU7LSSVTTYOoozrHXRW'

const Home = () => {
    
    // redux hooks
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    const origin = useSelector(state => state.search.origin)
    const destination = useSelector(state => state.search.destination)
    const weatherPopup = useSelector(state => state.weather.popup)
    
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
        firstScript.onload = () => renderBlankMap()
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

    const fetchWeather = async (city) => {

        const authKey = localStorage.getItem('auth_key')
    
        const fetchObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'GET'
        }
    
        const fetchWeather = await fetch(WEATHER_URL + '/' + city, fetchObj)
        const wethRes = await fetchWeather.json()

        const weather = JSON.parse(wethRes.weather)
        return weather
    }

    // 6. Fetch weather at start and end locations
    const getWeather = async (locations) => {

        const startCity = locations.filter(loc => loc.start_end === 'Start')[0].city
        const endCity = locations.filter(loc => loc.start_end === 'End')[0].city
    
        if (startCity === endCity) {
            const startWeather = await fetchWeather(startCity)

            dispatch({ type: 'ADD_WEATHER', weather: startWeather })
        } else {
            const startWeather = await fetchWeather(startCity)
            const endWeather = await fetchWeather(endCity)
            
            dispatch({ type: 'ADD_WEATHER', weather: startWeather })
            dispatch({ type: 'ADD_WEATHER', weather: endWeather })
        }
    }

    // 5. Fetch trip including locations and segments
    const fetchTrip = async (tripId) => {

        const authKey = localStorage.getItem('auth_key')

        const fetchObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'GET'
        }
        const fetchTrip = await fetch(TRIP_URL+'/'+tripId, fetchObj)
        const tripRes = await fetchTrip.json()

        // fetch weather from open weather API
        getWeather(tripRes.trip.locations)

        dispatch({ type: 'SET_LOCATIONS', locations: tripRes.trip.locations})
        dispatch({ type: 'SET_SEGMENTS', segments: tripRes.trip.segments})
        dispatch({ type: 'SET_TRIP_DETAILS', tripId: tripRes.trip.id, time: tripRes.trip.time, realTime: tripRes.trip.real_time, distance: tripRes.trip.distance, hasTolls: tripRes.trip.has_tolls, fuelUsage: tripRes.trip.fuel_usage })

    }

    // 4. post segments to rails
    const postSegment = async (tripId, segment) => {

        const authKey = localStorage.getItem('auth_key')

        const segmentInfo = {
            segment: {
                trip_id: tripId,
                index_num: segment.index,
                instructions: segment.narrative,
                icon_url: segment.iconUrl,
                distance: segment.distance,
                time: segment.time,
                direction: segment.directionName,
                turn_type: segment.turnType,
                map_url: segment.mapUrl
            }
        }

        const postObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'POST',
            body: JSON.stringify(segmentInfo)
        }

        const postSeg = await  fetch(SEGMENT_URL, postObj)
        const segRes = await postSeg.json()
    }

    // 3. post locations to rails
    const postLocation = async (tripId, location, point) => {

        const authKey = localStorage.getItem('auth_key')

        const locationInfo = {
            location: {
                trip_id: tripId,
                start_end: point,
                street: location.street,
                city: location.adminArea5,
                county: location.adminArea4,
                state: location.adminArea3,
                zip_code: location.postalCode
            }
        }

        const postObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'POST',
            body: JSON.stringify(locationInfo)
        }

        const postLocation = await fetch(LOCATION_URL, postObj)
        const locRes = await postLocation.json()
    }

    // 2. post trip to rails (status = not_started)
    const postTrip = async (route) => {

        const userId = localStorage.getItem('user_id')
        const authKey = localStorage.getItem('auth_key')

        const tripInfo = {
            trip: {
                user_id: userId,
                time: route.route.time,
                real_time: route.route.realTime,
                distance: route.route.distance,
                has_tolls: route.route.hasTollRoad,
                fuel_usage: route.route.fuelUsed
            }
        }

        const postObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'POST',
            body: JSON.stringify(tripInfo)
        }

        const postTrip = await fetch(TRIP_URL, postObj)
        const tripRes = await postTrip.json()

        // Post start and end locations to rails
        postLocation(tripRes.trip.id, route.route.locations[0], 'Start')
        postLocation(tripRes.trip.id, route.route.locations[1], 'End')

        // Post each segment to rails
        route.route.legs[0].maneuvers.forEach(segment => postSegment(tripRes.trip.id, segment))

        // Refetch trip with locations and segments
        fetchTrip(tripRes.trip.id)
    }

    // 1. fetch trip information => Rails => MQ
    const findDirections = async (start, end) => {

        const authKey = localStorage.getItem('auth_key')

        const fetchObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'GET'
        }

        const fetchRoute = await fetch(ROUTE_URL + '/' + start + '/' + end, fetchObj)
        const routeRes = await fetchRoute.json()
        
        // response from mapquest (contains all trip, location and segment information)
        const route = JSON.parse(routeRes.route)

        // post trip to rails
        postTrip(route)
    }

    // add route to map
    const loadMap = (start, end) => {
        
        window.L.mapquest.key = API_KEY;

        window.L.mapquest.directions().route({
            start: start,
            end: end
        });
    }
    
    // remove route from map
    const removeRoute = () => {
        window.L.mapquest.directions().remove()
    }

    const searchRoute = (e) => {
        
        e.preventDefault()

        // save search results before clearing form
        const start = origin
        const end = destination
        
        // need to uncomment for demo!
        loadMap(start, end)

        findDirections(start, end)
        
        // reset search form
        dispatch({ type: 'RESET_SEARCH'})

    }

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <SearchBar searchRoute={(e) => searchRoute(e)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TripDetails removeRoute={() => removeRoute()} />
                    </Col>
                    <Col>
                        <Map />
                    </Col>
                </Row>
            </Container>
            <Container>
                { weatherPopup ? <WeatherPopUp /> : null }
            </Container>
        </div>
    )
}

export default Home