import Axios, {AxiosRequestConfig} from "axios";
import config from "../config";
import {PageRequest} from "../Request";

export const requestConfig: AxiosRequestConfig = {
  headers: {
    "cache-control": "private"
  }
}
export function createResourceGetter(endpoint: string) {
  return (nameOrId: string|number) => {
    if (typeof nameOrId === "string")
      nameOrId = (nameOrId as string).toLowerCase();
    return Axios.get(`${config.baseUrl}/${endpoint}/${nameOrId}`, requestConfig)
        .then(res => res.data);
  }
}

export function createListGetter(endpoint: string) {
  return (pageRequest?: PageRequest) => Axios.get(`${config.baseUrl}/${endpoint}`, {
    ...requestConfig,
    params: {
      limit: pageRequest?.limit,
      offset: pageRequest?.offset
    }
  }).then(res => res.data);
}
