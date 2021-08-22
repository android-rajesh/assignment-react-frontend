import { API } from "../../constants";
import { axiosGet } from "../axios-wrapper";

export async function getDepartmentList() {
  return await axiosGet(`${API.department}`, {});
}

export async function getEmployeeList() {
  return await axiosGet(`${API.employee}`, {});
}

export async function getSalaryList() {
  return await axiosGet(`${API.salary}`, {});
}