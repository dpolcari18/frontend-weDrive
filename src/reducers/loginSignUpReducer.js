const loginSignUpReducer = (state = { 
        loggedIn: false,
        showError: false,
        errors: []
    } , action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loggedIn: action.loggedIn
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                loggedIn: action.loggedIn
            }
        case 'SHOW_ERRORS':
            return {
                ...state,
                showError: action.showError,
                errors: action.errors
            }
        default:
            return state
    }
}

export default loginSignUpReducer