const weatherReducer = (state = { weather: [], popup: false } , action) => {
    switch(action.type) {
        case 'ADD_WEATHER': 
            return {
                ...state,
                weather: [...state.weather, action.weather]
            }
        case 'CLEAR_WEATHER':
            return {
                ...state,
                weather: []
            }
        case 'OPEN_POPUP':
            return {
                ...state,
                popup: true
            }
        case 'CLOSE_POPUP':
            return {
                ...state,
                popup: false
            }
        default:
            return state
    }
}

export default weatherReducer