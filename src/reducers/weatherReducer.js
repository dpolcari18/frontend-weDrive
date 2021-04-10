const weatherReducer = (state = { weather: [] } , action) => {
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
        default:
            return state
    }
}

export default weatherReducer