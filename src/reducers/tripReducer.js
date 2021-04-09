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
        default:
            return state
    }
}

export default tripReducer