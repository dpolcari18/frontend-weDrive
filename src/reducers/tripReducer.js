const tripReducer = (state = { trips: [] } , action) => {
    switch(action.type) {
        case 'GET_TRIPS':
            return {

            }
        default:
            return state
    }
}

export default tripReducer