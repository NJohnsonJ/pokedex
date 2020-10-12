import {APIResource, APIResourceList, Resource} from "../types/Utility/CommonModel";
import Axios from "axios";

class ListGetter<T extends Resource> {
  list: APIResourceList<T>;

  constructor(resourceList: APIResourceList<T>) {
    this.list = resourceList;
  }

  getAt(i: number) {
    if (i > this.list.results.length) {
      throw new Error('Index out of bounds.');
    } else {
      return Axios.get(this.list.results[i].url)
          .then(res => res.data);
    }
  }

  getNext() {

  }
}
function getResource(resource: APIResource<any>) {
}

export const getNextResource = <T extends Resource>(list: APIResourceList<T>): Promise<APIResourceList<T>> => {
  return Axios()
}