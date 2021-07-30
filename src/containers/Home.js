import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Components / Containers
import { CheckListPopup, Map, SearchBar, TripDetails, WeatherPopup } from '../Imports'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// APIs
import API from '../API'

// Endpoints
// const BASE = process.env.REACT_APP_BASE
// // const ROUTE_URL = 'https://wedrive-backend-hosting.herokuapp.com/routes'
// const ROUTE_URL = `${BASE}routes`
// // const WEATHER_URL = 'https://wedrive-backend-hosting.herokuapp.com/weather'
// const WEATHER_URL = `${BASE}weather`
// // const TRIP_URL = 'https://wedrive-backend-hosting.herokuapp.com/trips'
// const TRIP_URL = `${BASE}trips`
// // const LOCATION_URL = 'https://wedrive-backend-hosting.herokuapp.com/locations'
// const LOCATION_URL = `${BASE}locations`
// // const SEGMENT_URL = 'https://wedrive-backend-hosting.herokuapp.com/segments'
// const SEGMENT_URL = `${BASE}segments`

// API KEY
const API_KEY = process.env.REACT_APP_MAP_API

const Home = () => {
    
    // redux hooks
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loginSignUp.loggedIn)
    const origin = useSelector(state => state.search.origin)
    const destination = useSelector(state => state.search.destination)
    const weatherPopup = useSelector(state => state.popup.weather)
    const checkListPopup = useSelector(state => state.popup.checkList)
    
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
        const fetchWeather = await API.fetchWeather(city)
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
        const fetchTrip = await API.fetchTrip(tripId)
        const tripRes = await fetchTrip.json()

        // fetch weather from open weather API
        getWeather(tripRes.trip.locations)

        dispatch({ type: 'SET_LOCATIONS', locations: tripRes.trip.locations})
        dispatch({ type: 'SET_SEGMENTS', segments: tripRes.trip.segments})
        dispatch({ type: 'SET_TRIP_DETAILS', tripId: tripRes.trip.id, time: tripRes.trip.time, realTime: tripRes.trip.real_time, distance: tripRes.trip.distance, hasTolls: tripRes.trip.has_tolls, fuelUsage: tripRes.trip.fuel_usage })
    }

    // 4. post segments to rails
    const postSegment = (tripId, segment) => {
        API.postSegment(tripId, segment)
    }

    // 3. post locations to rails
    const postLocation = (tripId, location, point) => {
        API.postLocation(tripId, location, point)
    }

    // 2. post trip to rails (status = not_started)
    const postTrip = async (route, mapUrl) => {
        
        const postTrip = await API.postTrip(route, mapUrl)
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
        const fetchRoute = await API.fetchDirections(start, end)
        const routeRes = await fetchRoute.json()
        
        // response from mapquest (contains all trip, location and segment information)
        const route = JSON.parse(routeRes.route)
        
        // map url for static map
        const mapUrl = `https://www.mapquestapi.com/staticmap/v5/map?start=${start}&end=${end}&size=170,110@2x&key=${API_KEY}`
        
        // post trip to rails
        postTrip(route, mapUrl)
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
        document.getElementById('map').remove()

        const newMap = document.createElement('div')
            newMap.id = 'map'
            newMap.style.width = '100%'
            newMap.style.height = '60vh'

        document.getElementById('map-container').appendChild(newMap)

        renderBlankMap()
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
                    <Col id='trip-col'>
                        <TripDetails removeRoute={() => removeRoute()} />
                    </Col>
                    <Col id='map-column'>
                        <Map />
                    </Col>
                </Row>
            </Container>
            <Container>
                { weatherPopup ? <WeatherPopup /> : null }
                { checkListPopup ? <CheckListPopup /> : null}
            </Container>
        </div>
    )
}

export default Home