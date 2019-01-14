import axios from "axios"
import _get from "lodash/get"

import { history } from "./App/BrowserRouter"

export const BASE_API_URL = "http://localhost:5000/"

axios.defaults.baseURL = BASE_API_URL
axios.defaults.headers.common = {
  Accept: "application/json",
  "Content-Type": "application/json"
}

const responseSuccessHandler = response => response.data || {}

const responseErrorHandler = error => {
  const status = _get(error, "response.status")
  if (status === 403) {
    history.push("/not-authorized")
  }
  throw error
}

const requestFactory = (method, url, body = {}) => {
  const config = {
    headers: {}
  }

  config.method = method.toString().toLowerCase()
  if (Object.keys(body).length > 0) {
    if (config.method === "get") {
      config.params = body
    }
  }
  if (config.method === "post" || config.method === "patch") {
    config.data = body
  }

  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler)
}

export function api() {
  return {
    notAllowed() {
      return requestFactory("get", "forbidden")
    }
  }
}
