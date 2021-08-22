import * as types from "./actionTypes";
import { beginApiCall } from "./apiStatusActions";
import { setErrorMessage } from "./messageStateActions";
import { ErrorDictionary } from "../../services/error-dictionary";
import { getEmployeeList } from "../../services/api-service";

export function loadEmployeeListSuccess(model) {
  return { type: types.EMPLOYEE_LIST_SUCCESS, model };
}

export function loadEmployeeList(model) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(employeeListLoading());
    return getEmployeeList(model)
      .then((response) => {
        return dispatch(loadEmployeeListSuccess(response));
      })
      .catch(() => {
        return dispatch(loadEmployeeListError(dispatch));
      });
  };
}


export function employeeListLoading() {
  return { type: types.LOADING_EMPLOYEE_LIST };
}

export function loadEmployeeListError(dispatch) {
  dispatch(setErrorMessage(ErrorDictionary.EmployeeListingError));
  return { type: types.EMPLOYEE_LIST_ERROR };
}
