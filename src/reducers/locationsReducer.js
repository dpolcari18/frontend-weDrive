const locationsReducer = (state = { locations: [] } , action) => {
    switch(action.type) {
        case 'SET_LOCATIONS':
            return {
                ...state,
                locations: action.locations
            }
        case 'CLEAR_LOCATIONS':
            return {
                ...state,
                locations: []
            }
        default:
            return state
    }
}

export default locationsReducer