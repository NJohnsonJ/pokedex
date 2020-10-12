import {APIResourceList, Resource} from "../types/Utility/CommonModel";
import Axios from "axios";

class ListGetter<T extends Resource> {
  list: APIResourceList<T>;

  constructor(resourceList: APIResourceList<T>) {
    this.list = resourceList;
  }

  getAt(i: number): Promise<T> {
    let result = this.list.results[i];
    if (!result) {
      return Promise.reject();
    } else {
      return Axios.get(this.list.results[i].url)
          .then(res => res.data);
    }
  }

  getNext(): Promise<any> {
    return Axios.get(this.list.next)
        .then(result => result.data)
        .then(data => this.list = data);
  }

  getPrevious(): Promise<any> {
    return Axios.get(this.list.previous)
        .then(result => result.data)
        .then(data => this.list = data);
  }
}

export default ListGetter;
