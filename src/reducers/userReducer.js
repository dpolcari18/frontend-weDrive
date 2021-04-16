const userReducer = (state = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    edit: false
} , action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                id: action.user.id,
                firstName: action.user.first_name,
                lastName: action.user.last_name,
                phone: action.user.phone,
                email: action.user.email
            }
        case 'RESET':
            return {
                ...state,
                id: '',
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        case 'EDIT_USER':
            return {
                ...state,
                edit: true
            }
        case 'SAVE_USER':
            return {
                ...state,
                edit: false
            }
        case 'SET_USER_FIRST':
            return {
                ...state,
                firstName: action.firstName
            }
        case 'SET_USER_LAST':
            return {
                ...state,
                lastName: action.lastName
            }
        case 'SET_USER_EMAIL':
            return {
                ...state,
                email: action.email
            }
        case 'SET_USER_PHONE':
            return {
                ...state,
                phone: action.phone
            }
        default:
            return state
    }
}

export default userReducer