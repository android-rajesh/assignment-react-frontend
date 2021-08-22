import axios from "axios";
import { CONTENT_TYPE_APPLICATION_JSON_HEADER } from "../../constants";
import { handleError, handleResponse } from "../apiUtils";

async function axiosPost(url, model) {
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();


  return await axios
    .post(url, model, {
      cancelToken: source.token,
      method: "POST",
      headers: CONTENT_TYPE_APPLICATION_JSON_HEADER,
    })
    .then(handleResponse)
    .catch(handleError);
}

async function axiosPut(url, model) {
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  return await axios
    .put(url, model, {
      cancelToken: source.token,
      method: "PUT",
      headers: CONTENT_TYPE_APPLICATION_JSON_HEADER,
    })
    .then(handleResponse)
    .catch(handleError);
}

async function axiosGet(url, model) {
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  return await axios
    .get(url, model, {
      cancelToken: source.token,
      method: "GET",
      headers: CONTENT_TYPE_APPLICATION_JSON_HEADER,
    })
    .then(handleResponse)
    .catch(handleError);
}

async function axiosDelete(url, model) {
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  return await axios
    .delete(url, model, {
      cancelToken: source.token,
      method: "GET",
      headers: CONTENT_TYPE_APPLICATION_JSON_HEADER,
    })
    .then(handleResponse)
    .catch(handleError);
}



export { axiosPost, axiosPut, axiosGet, axiosDelete };
