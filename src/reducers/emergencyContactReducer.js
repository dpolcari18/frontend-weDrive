const emergencyContactReducer = (state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    edit: false
} , action) => {
    switch(action.type) {
        case 'SET_EMERGENCY_CONTACTS':
            return {
                ...state,
                firstName: action.emergencyContacts[0].first_name,
                lastName: action.emergencyContacts[0].last_name,
                email: action.emergencyContacts[0].email,
                phone: action.emergencyContacts[0].phone
            }
        case 'RESET':
            return {
                ...state,
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
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