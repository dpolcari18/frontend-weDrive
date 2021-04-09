import { createStore, combineReducers } from 'redux'

// reducers
import userReducer from './reducers/userReducer'
import tripReducer from './reducers/tripReducer'
import loginSignUpReducer from './reducers/loginSignUpReducer'
import vehicleReducer from './reducers/vehicleReducer'
import maintenanceReportReducer from './reducers/maintenanceReportReducer'
import emergencyContactReducer from './reducers/emergencyContactReducer'
import searchReducer from './reducers/searchReducer'
import tripDetailsReducer from './reducers/tripDetailsReducer'
import locationsReducer from './reducers/locationsReducer'
import segmentsReducer from './reducers/segmentsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    trip: tripReducer,
    vehicle: vehicleReducer,
    maintenanceReport: maintenanceReportReducer,
    emergencyContact: emergencyContactReducer,
    search: searchReducer,
    tripDetails: tripDetailsReducer,
    locations: locationsReducer,
    segments: segmentsReducer,
    loginSignUp: loginSignUpReducer
})

const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store