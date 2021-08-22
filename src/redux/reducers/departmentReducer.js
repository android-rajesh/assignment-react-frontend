import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function departmentListReducer(state = initialState.departmentState, action) {
  switch (action.type) {
    case types.LOADING_DEPARTMENT_LIST:
      return {
        ...state,
        pending: true,
      };
    case types.DEPARTMENT_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        current: action,
      };
    case types.DEPARTMENT_LIST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
