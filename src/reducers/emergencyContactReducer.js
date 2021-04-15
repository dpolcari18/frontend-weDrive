const emergencyContactReducer = (state = {
    emergencyContacts: [],
    edit: false
} , action) => {
    switch(action.type) {
        case 'SET_EMERGENCY_CONTACTS':
            return {
                ...state,
                emergencyContacts: action.emergencyContacts
            }
        case 'RESET':
            return {
                ...state,
                emergencyContacts: []
            }
        case 'EDIT_EC':
            return {
                ...state,
                edit: true
            }
        default:
            return state
    }
}

export default emergencyContactReducer