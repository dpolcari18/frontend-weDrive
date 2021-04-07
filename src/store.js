import { createStore  } from 'redux'

import tripReducer from './reducers/tripReducer'

const store = createStore(
        tripReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store