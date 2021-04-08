const userReducer = (state = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
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
        default:
            return state
    }
}

export default userReducer