const vehicleReducer = (state = {
    vehicles: [],
    addForm: false
} , action) => {
    switch(action.type) {
        case 'SET_VEHICLES':
            return {
                ...state,
                vehicles: action.vehicles
            }
        case 'OPEN_ADD_VEHICLE_FORM':
            return {
                ...state,
                addForm: true
            }
        case 'CLOSE_ADD_VEHICLE_FORM':
            return {
                ...state,
                addForm: false
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