const BASE_URL = process.env.REACT_APP_BASE
const AUTH_KEY = localStorage.getItem('auth_key')
const USER_ID = localStorage.getItem('user_id')
const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AUTH_KEY}`
}

export default class API {

    static deleteVehicle(vehicleId) {
        const deleteObj =  {
            headers: HEADERS,
            method: 'DELETE'    
        }

        fetch(`${BASE_URL}vehicles/${vehicleId}`, deleteObj)
    }

    static fetchDirections(start, end) {
        const fetchObj = {
            headers: HEADERS,
            method: 'GET'
        }

        return fetch(`${BASE_URL}routes/${start}/${end}`, fetchObj)
    }

    static fetchTrip(tripId) {
        const fetchObj = {
            headers: HEADERS,
            method: 'GET'
        }

        return fetch(`${BASE_URL}trips/${tripId}`, fetchObj)
    }

    static fetchUser() {
        const fetchObj  = {
            headers: HEADERS,
            method: 'GET'
        }

        return fetch(`${BASE_URL}users/${USER_ID}`, fetchObj)
    }

    static fetchWeather(city) {
        const fetchObj = {
            headers: HEADERS,
            method: 'GET'
        }

        return fetch(`${BASE_URL}weather/${city}`, fetchObj)
    }

    static patchEmergencyContact(ecId, firstName, lastName, email, phone) {
        const emergencyContact = {
            emergency_contact: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone
            }
        }

        const patchObj = {
            headers: HEADERS,
            method: 'PATCH',
            body: JSON.stringify(emergencyContact)
        }

        fetch(`${BASE_URL}emergency_contacts/${ecId}`, patchObj)
    }

    static patchTripStatus(status, tripDetails) {
        const patchObj = {
            headers: HEADERS,
            method: 'PATCH',
            body: JSON.stringify({
                trip: {
                    id: tripDetails.tripId,
                    trip_status: status
                }
            })

        }

        return fetch(`${BASE_URL}trips/${tripDetails.tripId}`, patchObj)
    }

    static patchUser(firstName, lastName, email, phone) {
        const user = {
            user: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone
            }
        }

        const patchObj = {
            headers: HEADERS,
            method: 'PATCH',
            body: JSON.stringify(user)
        }

        fetch(`${BASE_URL}users/${USER_ID}`, patchObj)

    }

    static patchVehicle(vehicleId, mileage) {
        const mileageObj = {
            vehicle: {
                mileage: mileage
            }
        }

        const patchObj = {
            headers: HEADERS,
            method: 'PATCH',
            body: JSON.stringify(mileageObj)
        }

        return fetch(`${BASE_URL}vehicles/${vehicleId}`, patchObj)
    }

    static postEmergencyContact(userId, firstName, lastName, email, phoneNumber) {
        const newEc ={
            emergency_contact: {
                user_id: userId,
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phoneNumber
            }
        }

        const postObj = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newEc)
        }

        return fetch(`${BASE_URL}emergency_contacts`, postObj)
    }

    static postLocation(tripId, location, point) {
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
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify(locationInfo)
        }

        return fetch(`${BASE_URL}locations`, postObj)
    }

    static postLogin(email, password) {
        const user = {
            user: {
                email: email,
                password: password
            }
        }
        
        const postObj = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        }
        
        return fetch(`${BASE_URL}sessions`, postObj)
        
    }

    static postMaintenanceReport(vehicleId, type, notes, mileage) {
        const mainRepoObj = {
            maintenance_report: {
                vehicle_id: vehicleId,
                description: type,
                notes: notes,
                mileage: mileage
            }
        }

        const postObj = {
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify(mainRepoObj)
        }

        return fetch(`${BASE_URL}maintenance_reports/`, postObj)
    }

    static postSegment(tripId, segment) {
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
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify(segmentInfo)
        }

        return fetch(`${BASE_URL}segments`, postObj)
    }

    static postTrip(route, mapUrl) {
        const tripInfo = {
            trip: {
                user_id: USER_ID,
                time: route.route.time,
                real_time: route.route.realTime,
                distance: route.route.distance,
                has_tolls: route.route.hasTollRoad,
                fuel_usage: route.route.fuelUsed,
                map_url: mapUrl 
            }
        }

        const postObj = {
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify(tripInfo)
        }

        return fetch(`${BASE_URL}trips`, postObj)
    }
    
    static postUser(firstName, lastName, email, phoneNumber, password) {
         const newUser = {
            user: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phoneNumber,
                password: password
            }
        }

        const postObj = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newUser)
        }

        return fetch(`${BASE_URL}users`, postObj)
    }

    static postVehicle(make, model, year, mileage) {
        const vehicleObj = {
            vehicle: {
                user_id: USER_ID,
                make: make,
                model: model,
                year: year,
                mileage: mileage
            }
        }

        const postObj = {
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify(vehicleObj)
        }

        return fetch(`${BASE_URL}vehicles/`, postObj)
    }

    static sendEmail(type, tripId) {
        const obj = {
            headers: HEADERS,
            method: 'GET'
        }

        let url

        type === 'Start' ? url = `${BASE_URL}starttrip/${tripId}` : url = `${BASE_URL}endtrip/${tripId}`

        fetch(url, obj)
    }
}