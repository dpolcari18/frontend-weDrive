const popupReducer = (state = {
    weather: false,
    checkList: false
} , action) => {
    switch(action.type) {
        case 'OPEN_WEATHER_POPUP':
            return {
                ...state,
                weather: true
            }
        case 'CLOSE_WEATHER_POPUP':
            return {
                ...state,
                weather: false
            }
        case 'OPEN_CHECKLIST_POPUP':
            return {
                ...state,
                checkList: true
            }
        case 'CLOSE_CHECKLIST_POPUP':
            return {
                ...state,
                checkList: false
            }
        default:
            return state
    }
}

export default popupReducer