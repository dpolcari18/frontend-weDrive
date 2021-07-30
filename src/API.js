const BASE_URL = process.env.REACT_APP_BASE

export default class API {
    static fetchDirections(start, end) {
        const authKey = localStorage.getItem('auth_key')

        const fetchObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'GET'
        }

        return fetch(`${BASE_URL}routes/${start}/${end}`, fetchObj)
    }

    static fetchTrip(tripId) {
        const authKey = localStorage.getItem('auth_key')

        const fetchObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'GET'
        }

        return fetch(`${BASE_URL}trips/${tripId}`, fetchObj)
    }

    static fetchUser() {
        const userId = localStorage.getItem('user_id')
        const authKey = localStorage.getItem('auth_key')

        const fetchObj  = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }

        return fetch(`${BASE_URL}users/${userId}`, fetchObj)
    }

    static fetchWeather(city) {
        const authKey = localStorage.getItem('auth_key')
    
        const fetchObj = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            },
            method: 'GET'
        }

        return fetch(`${BASE_URL}weather/${city}`, fetchObj)
    }

    static postTrip(route, mapUrl) {
        const userId = localStorage.getItem('user_id')
        const authKey = localStorage.getItem('auth_key')
    
        const tripInfo = {
            trip: {
                user_id: userId,
                time: route.route.time,
                real_time: route.route.realTime,
                distance: route.route.distance,
                has_tolls: route.route.hasTollRoad,
                fuel_usage: route.route.fuelUsed,
                map_url: mapUrl 
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

        return fetch(`${BASE_URL}trips`, postObj)
    }

    static postLocation(tripId, location, point) {
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

        return fetch(`${BASE_URL}locations`, postObj)
    }

    static postSegment(tripId, segment) {
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

        return fetch(`${BASE_URL}segments`, postObj)
    }

}