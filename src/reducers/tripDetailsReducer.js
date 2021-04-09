const tripDetailsReducer = (state = { 
    time: '',
    realTime: '',
    distance: '', 
    hasTolls: '',
    fuelUsage: ''
 } , action) => {
    switch(action.type) {
        case 'SET_TRIP_DETAILS':
            return {
                ...state,
                time: action.time,
                realTime: action.realTime,
                distance: action.distance,
                hasTolls: action.hasTolls,
                fuelUsage: action.fuelUsage
            }
        default:
            return state
    }
}

export default tripDetailsReducer