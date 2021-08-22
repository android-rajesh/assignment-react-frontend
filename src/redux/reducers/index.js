import { combineReducers } from "redux";
import salaryState from "./salaryReducer";
import employeeState from "./employeeReducer";
import departmentState from "./departmentReducer";
import apiCallsInProgress from "./apiStatusReducer";
import messageState from "./messageStateReducer";

const rootReducer = combineReducers({
  salaryState,
  employeeState,
  departmentState,
  messageState,
  apiCallsInProgress,
});

export default rootReducer;
