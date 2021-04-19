const vehicleReducer = (state = {
    vehicles: [],
    addForm: false,
    editMileage:[false, '']
} , action) => {
    switch(action.type) {
        case 'SET_VEHICLES':
            return {
                ...state,
                vehicles: action.vehicles.sort((a,b) => a.id - b.id)
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
        case 'ADD_VEHICLE':
            return {
                ...state,
                vehicles: [...state.vehicles, action.vehicle]
            }
        case 'REMOVE_VEHICLE':
            return {
                ...state,
                vehicles: state.vehicles.filter(veh => veh.id !== action.id)
            }
        case 'REPLACE_VEHICLE':
            return {
                ...state,
                vehicles: [...state.vehicles.filter(veh => veh.id !== action.vehicle.id), action.vehicle].sort((a,b) => a.id - b.id)
            }
        case 'EDIT_MILEAGE':
            return {
                ...state,
                editMileage: [true, action.id]
            }
        case 'STOP_EDIT_MILEAGE':
            return {
                ...state,
                editMileage: [false, '']
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