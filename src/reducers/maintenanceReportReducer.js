const maintenanceReportReducer = (state = {
    maintenanceReports: [],
    addForm: false
} , action) => {
    switch(action.type) {
        case 'SET_MAINTENANCE_REPORTS':
            return {
                ...state,
                maintenanceReports: action.maintenanceReports
            }
        case 'OPEN_MAIN_REPORT_FORM':
            return {
                ...state,
                addForm: true
            }
        case 'CLOSE_MAIN_REPORT_FORM':
            return {
                ...state,
                addForm: false
            }
        case 'ADD_MAIN_REPORT':
            return {
                ...state,
                maintenanceReports: [...state.maintenanceReports, action.maintenanceReport]
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