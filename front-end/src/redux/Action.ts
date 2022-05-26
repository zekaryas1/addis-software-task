import {Employee} from "../models/Employee";

const SET_CURRENT_EMPLOYEE = (employee: Employee) => {
    return {
        type: "SET_CURRENT_EMPLOYEE",
        payload: employee

    }
}

export default SET_CURRENT_EMPLOYEE;