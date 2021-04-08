const vehicleReducer = (state = {
    vehicles: []
} , action) => {
    switch(action.type) {
        case 'SET_VEHICLES':
            return {
                ...state,
                vehicles: action.vehicles
            }
        default:
            return state
    }
}

export default vehicleReducer