import * as types from "./actionTypes";
import { beginApiCall } from "./apiStatusActions";
import { setErrorMessage } from "./messageActions";
import { getDepartmentList } from "../../services/api-service";
import { ErrorDictionary } from "../../services/error-dictionary";

export function loadDepartmentListSuccess(model) {
  return { type: types.DEPARTMENT_LIST_SUCCESS, model };
}

export function loadDepartmentList(model) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(departmentListLoading());
    return getDepartmentList(model)
      .then((response) => {
        return dispatch(loadDepartmentListSuccess(response));
      })
      .catch(() => {
        return dispatch(loadDepartmentListError(dispatch));
      });
  };
}


export function departmentListLoading() {
  return { type: types.LOADING_DEPARTMENT_LIST };
}

export function loadDepartmentListError(dispatch) {
  dispatch(setErrorMessage(ErrorDictionary.DepartmentListingError));
  return { type: types.DEPARTMENT_LIST_ERROR };
}
