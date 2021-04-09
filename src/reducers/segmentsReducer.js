const segmentsReducer = (state = { segments: [] } , action) => {
    switch(action.type) {
        case 'SET_SEGMENTS':
            return {
                ...state,
                segments: action.segments
            }
        default:
            return state
    }
}

export default segmentsReducer