const maintenanceReportReducer = (state = {
    maintenanceReports: []
} , action) => {
    switch(action.type) {
        case 'SET_MAINTENANCE_REPORTS':
            return {
                ...state,
                maintenanceReports: action.maintenanceReports
            }
        case 'RESET':
            return {
                ...state,
                maintenanceReports: []
            }
        default:
            return state
    }
}

export default maintenanceReportReducer