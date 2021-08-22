import { SERVICE_URL } from "./environment";

export const BASE_URL = "/";

export const CONTENT_TYPE_APPLICATION_JSON_HEADER = {
  "Content-Type": "application/json",
};
export const API = {
  salary: `${SERVICE_URL}/salaries`,
  employee: `${SERVICE_URL}/employees`,
  department: `${SERVICE_URL}/departments`
}

export const RoutesTable = {
  Home: "/home",
  ReactDefault: "/react"
};