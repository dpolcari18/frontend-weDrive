const maintenanceReportReducer = (state = {
    maintenanceReports: [],
    filteredReports: [],
    addForm: false,
    filter: 'All'
} , action) => {
    switch(action.type) {
        case 'SET_MAINTENANCE_REPORTS':
            return {
                ...state,
                maintenanceReports: action.maintenanceReports,
                filteredReports: action.maintenanceReports.map(report => report.id)
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
        case 'SET_REPORT_FILTER':
            let newlyFilteredReports = []

            if (action.filter === 'All') {
                newlyFilteredReports = state.maintenanceReports
            } else {
                newlyFilteredReports = state.maintenanceReports.filter(report => report.description === action.filter)
            }
            return {
                ...state,
                filter: action.filter,
                filteredReports: newlyFilteredReports.map(repo => repo.id)
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