import {combineReducers} from "redux";
import EmployeeReducer from "./Reducer";

const allReducers = combineReducers({
    employee: EmployeeReducer,
})

export default allReducers;