import React from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const WeatherPopup = () => {

    const dispatch = useDispatch()
    const weather = useSelector(state => state.weather.weather)
    const locations = useSelector(state => state.locations.locations)

    const openChecklist = () => {
        dispatch({ type: 'CLOSE_WEATHER_POPUP' })
        dispatch({ type: 'OPEN_CHECKLIST_POPUP' })
    }

    const getTime = (unixTime) => {
        const dt = new Date(unixTime*1000)
        const hours = dt.getHours()
        const minutes = "0" + dt.getMinutes()

        return hours + ":" + minutes.substr(-2)
    }
    
    const displayWeather = () => {
        if (weather.length === 2) {
            // filter the weather array by origin / destination
            const originWeather = weather.filter(loc => loc.name === locations.filter(city => city.start_end === "Start")[0].city)[0]
            const destinationWeather = weather.filter(loc => loc.name === locations.filter(city => city.start_end === "End")[0].city)[0]

            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Weather Report</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>{originWeather.name}</h4>
                        </Col>
                        <Col>
                            <h4>{destinationWeather.name}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={`http://openweathermap.org/img/wn/${originWeather.weather[0].icon}@2x.png`} alt='icon' />
                        </Col>
                        <Col>
                            <img src={`http://openweathermap.org/img/wn/${destinationWeather.weather[0].icon}@2x.png`} alt='icon' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {originWeather.weather[0].main} - {originWeather.weather[0].description}
                        </Col>
                        <Col>
                            {destinationWeather.weather[0].main} - {destinationWeather.weather[0].description}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {Math.floor(originWeather.main.temp)} F
                        </Col>
                        <Col>
                            {Math.floor(destinationWeather.main.temp)} F
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Winds @ {Math.floor(originWeather.wind.speed*10)/10} mph
                        </Col>
                        <Col>
                            Winds @ {Math.floor(destinationWeather.wind.speed*10)/10} mph
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            1 hr Rainfall: {originWeather.rain ? originWeather.rain['1h'] : 0 } inches
                        </Col>
                        <Col>
                            1 hr Rainfall: {destinationWeather.rain ? destinationWeather.rain['1h']: 0 } inches
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            1 hr Snowfall: {originWeather.snow ? originWeather.snow['1h'] : 0 } inches
                        </Col>
                        <Col>
                            1 hr Snowfall: {destinationWeather.snow ? destinationWeather.snow['1h']: 0 } inches
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Sunrise: {getTime(originWeather.sys.sunrise)}
                        </Col>
                        <Col>
                            Sunrise: {getTime(destinationWeather.sys.sunrise)}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Sunset: {getTime(originWeather.sys.sunset)}
                        </Col>
                        <Col>
                            Sunset: {getTime(destinationWeather.sys.sunset)}
                        </Col>
                    </Row>
                    <Row id='safety'>
                        <Col>
                            <h5>Please plan accordingly and drive safely!</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={() => openChecklist()}>Continue</Button>
                        </Col>
                    </Row>
                </Container>
            )
    
        } else {
            const originWeather = weather.filter(loc => loc.name === locations.filter(city => city.start_end === "Start")[0].city)[0]
            
            return (
                <Container>
                    <Row>
                        <Col>
                            <h3>Weather Report</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {originWeather.name}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src={`http://openweathermap.org/img/wn/${originWeather.weather[0].icon}@2x.png`} alt='icon' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {originWeather.weather[0].main} - {originWeather.weather[0].description}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {Math.floor(originWeather.main.temp)} F
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Winds @ {Math.floor(originWeather.wind.speed*10)/10} mph
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            1 hr Rainfall: {originWeather.rain ? originWeather.rain['1h'] : 0 } inches
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            1 hr Snowfall: {originWeather.snow ? originWeather.snow['1h'] : 0 } inches
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Sunrise: {getTime(originWeather.sys.sunrise)}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Sunset: {getTime(originWeather.sys.sunset)} 
                        </Col>
                    </Row>
                    <Row id='safety'>
                        <Col>
                            <h5>Please plan accordingly and drive safely!</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button onClick={() => openChecklist()}>Continue</Button>
                        </Col>
                    </Row>
                </Container>
            )
        }   
    }

    return (
        <div className="popup-box">
            <div className="box">
                <Container>
                    <Row>
                        {displayWeather()}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default WeatherPopup
