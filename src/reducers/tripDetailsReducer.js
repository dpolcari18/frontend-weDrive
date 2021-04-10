const tripDetailsReducer = (state = { 
    tripId: '',
    display: '',
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
                tripId: action.tripId,
                display: 'details',
                time: action.time,
                realTime: action.realTime,
                distance: action.distance,
                hasTolls: action.hasTolls,
                fuelUsage: action.fuelUsage
            }
        case 'START_TRIP':
            return {
                ...state, 
                display: 'segments'
            }
        case 'END_TRIP':
            return {
                ...state,
                tripId: '',
                display: '',
                time: '',
                realTime: '',
                distance: '', 
                hasTolls: '',
                fuelUsage: ''
            }
        default:
            return state
    }
}

export default tripDetailsReducer