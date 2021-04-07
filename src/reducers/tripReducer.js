const tripReducer = (state = { trips: []} , action) => {
    switch(action.type) {
        case 'GET_TRIPS':
            return {

            }
            break
        default:
            return state
    }
}

export default tripReducer