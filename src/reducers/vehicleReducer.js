const vehicleReducer = (state = {
    vehicles: []
} , action) => {
    switch(action.type) {
        case 'SET_VEHICLES':
            return {
                ...state,
                vehicles: action.vehicles
            }
        case 'RESET':
            return {
                ...state,
                vehicles: []
            }
        default:
            return state
    }
}

export default vehicleReducer