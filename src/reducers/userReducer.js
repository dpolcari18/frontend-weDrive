const userReducer = (state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    emergencyContacts: [],
    maintenanceReports: [],
    trips: [],
    vehicles: [] 
} , action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default userReducer