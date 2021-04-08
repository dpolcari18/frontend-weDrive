const loginSignUpReducer = (state = { loggedIn: false, signUp: false} , action) => {
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
        case 'SIGN_UP':
            return {
                ...state,
                signUp: action.signUp
            }
        default:
            return state
    }
}

export default loginSignUpReducer