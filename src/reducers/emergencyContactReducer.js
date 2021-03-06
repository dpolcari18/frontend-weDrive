const emergencyContactReducer = (state = {
    id: '',
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
                id: action.emergencyContacts[0].id,
                firstName: action.emergencyContacts[0].first_name,
                lastName: action.emergencyContacts[0].last_name,
                email: action.emergencyContacts[0].email,
                phone: action.emergencyContacts[0].phone
            }
        case 'RESET':
            return {
                ...state,
                id: '',
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
        case 'SAVE_EC':
            return {
                ...state,
                edit: false
            }
        case 'SET_EC_FIRST':
            return {
                ...state,
                firstName: action.firstName
            }
        case 'SET_EC_LAST':
            return {
                ...state,
                lastName: action.lastName
            }
        case 'SET_EC_EMAIL':
            return {
                ...state,
                email: action.email
            }
        case 'SET_EC_PHONE':
            return {
                ...state,
                phone: action.phone
            }
        default:
            return state
    }
}

export default emergencyContactReducer