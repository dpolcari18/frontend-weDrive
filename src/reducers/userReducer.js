import { Provider } from "react-redux"

const userReducer = (state = { loggedIn: false} , action) => {
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
        default:
            return state
    }
}

export default userReducer