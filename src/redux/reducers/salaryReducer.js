import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function salaryListReducer(state = initialState.salaryState, action) {
  switch (action.type) {
    case types.LOADING_SALARY_LIST:
      return {
        ...state,
        pending: true,
      };
    case types.SALARY_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        current: action,
      };
    case types.SALARY_LIST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
