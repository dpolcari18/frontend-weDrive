const tripReducer = (state = { trips: [], locations: [] } , action) => {
    switch(action.type) {
        case 'SET_TRIPS':
            return {
                ...state,
                trips: action.trips,
                locations: action.locations
            }
        case 'RESET':
            return {
                ...state,
                trips: [],
                locations: []
            }
        case 'ADD_TRIP':
            const locations = action.trip.locations
            debugger
            const trip = {
                id: action.trip.id,
                time: action.trip.time,
                real_time: action.trip.real_time,
                distance: action.trip.distance,
                has_tolls: action.trip.has_tolls,
                fuel_usage: action.trip.fuel_usage,
                created_at: action.trip.created_at,
                trip_status: action.trip.trip_status
            }
            return {
                ...state,
                locations: [...state.locations, ...locations],
                trips: [...state.trips, trip]
            }
        default:
            return state
    }
}

export default tripReducer