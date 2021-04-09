const locationsReducer = (state = { locations: [] } , action) => {
    switch(action.type) {
        case 'SET_LOCATIONS':
            return {
                ...state,
                locations: action.locations
            }
        default:
            return state
    }
}

export default locationsReducer