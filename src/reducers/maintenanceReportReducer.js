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
            let newReports = []

            if (state.filter === action.maintenanceReport.description) {
                newReports = [...state.filteredReports, action.maintenanceReport.id]
            } else if (state.filter === 'All') {
                newReports = [...state.filteredReports, action.maintenanceReport.id]
            } else {
                newReports = state.filteredReports
            }
            return {
                ...state,
                maintenanceReports: [...state.maintenanceReports, action.maintenanceReport],
                filteredReports: newReports
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
        case 'REMOVE_MAINTENANCE_REPORTS':
            // find reports that are being kept
            let keptReports = state.maintenanceReports.filter(report => report.vehicle_id !== action.vehicle_id).map(repo => repo.id)
            
            return {
                ...state,
                maintenanceReports: state.maintenanceReports.filter(report => report.vehicle_id !== action.vehicle_id),
                // only keep reports in filter that aren't being deleted
                filteredReports: state.filteredReports.filter(repoId => keptReports.includes(repoId) )
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