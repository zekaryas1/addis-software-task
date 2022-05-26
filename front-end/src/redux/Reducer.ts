import {Employee} from "../models/Employee";

const EmployeeReducer = (state = {}, action: { type: string, payload: Employee }) => {
    switch (action.type) {
        case "SET_CURRENT_EMPLOYEE":
            state = {
                ...action.payload
            }
            return state;
        default:
            return state
    }
}

export default EmployeeReducer;