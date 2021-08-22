import * as types from "./actionTypes";
import { beginApiCall } from "./apiStatusActions";
import { getSalaryList } from "../../services/api-service";
import { ErrorDictionary } from "../../services/error-dictionary";
import { setErrorMessage } from "./messageActions";

export function loadSalaryListSuccess(model) {
  return { type: types.SALARY_LIST_SUCCESS, model };
}

export function loadSalaryList(model) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(salaryListLoading());
    return getSalaryList(model)
      .then((response) => {
        return dispatch(loadSalaryListSuccess(response));
      })
      .catch(() => {
        return dispatch(loadSalaryListError(dispatch));
      });
  };
}


export function salaryListLoading() {
  return { type: types.LOADING_SALARY_LIST };
}

export function loadSalaryListError(dispatch) {
  dispatch(setErrorMessage(ErrorDictionary.SalaryListingError));
  return { type: types.SALARY_LIST_ERROR };
}
