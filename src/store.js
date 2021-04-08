import { createStore, combineReducers } from 'redux'

import userReducer from './reducers/userReducer'
import tripReducer from './reducers/tripReducer'
import loginSignUpReducer from './reducers/loginSignUpReducer'

const rootReducer = combineReducers({
    user: userReducer,
    trip: tripReducer,
    loginSignUp: loginSignUpReducer
})

const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store