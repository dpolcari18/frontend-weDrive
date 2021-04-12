const searchReducer = (state = { origin: '', destination: '' } , action) => {
    switch(action.type) {
        case 'SET_ORIGIN':
            return {
                ...state,
                origin: action.origin
            }
        case 'SET_DESTINATION':
            return {
                ...state,        
                destination: action.destination
            }
        case 'RESET_SEARCH':
            return {
                ...state,
                origin: '',
                destination: ''
            }
        default:
            return state
    }
}

export default searchReducer