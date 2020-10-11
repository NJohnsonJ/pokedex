import Axios from "axios";
import config from "../config";
import {IdRequest, ListRequest, NameRequest, PageRequest} from "../Request";
import {NamedResource, Resource} from "../types/Utility/CommonModel";

export function createResourceGetter(endpoint: string) {
    return (nameOrId: string|number) => Axios.get(`${config.baseUrl}/${nameOrId}`)
        .then(res => res.data);
}

export function createListGetter(endpoint: string) {
    return (pageRequest?: PageRequest) => Axios.get(`${config.baseUrl}`, {
        params: {
            limit: pageRequest?.limit,
            offset: pageRequest?.offset
        }
    }).then(res => res.data);
}
