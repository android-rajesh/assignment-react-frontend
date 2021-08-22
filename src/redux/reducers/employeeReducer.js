import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function employeeListReducer(state = initialState.employeeState, action) {
  switch (action.type) {
    case types.LOADING_EMPLOYEE_LIST:
      return {
        ...state,
        pending: true,
      };
    case types.EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        current: action,
      };
    case types.EMPLOYEE_LIST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
