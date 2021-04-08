const emergencyContactReducer = (state = {
    emergencyContacts: []
} , action) => {
    switch(action.type) {
        case 'SET_EMERGENCY_CONTACTS':
            return {
                ...state,
                emergencyContacts: action.emergencyContacts
            }
        default:
            return state
    }
}

export default emergencyContactReducer