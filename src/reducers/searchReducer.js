const searchReducer = (state = { origin: '', destination: '', map: false} , action) => {
    switch(action.type) {
        case 'SET_ORIGIN':
            return {
                ...state,
                origin: action.origin,
                map: false
            }
        case 'SET_DESTINATION':
            return {
                ...state,        
                destination: action.destination,
                map: false
            }
        case 'RESET_SEARCH':
            return {
                ...state,
                origin: '',
                destination: '',
                map: true
            }
        default:
            return state
    }
}

export default searchReducer