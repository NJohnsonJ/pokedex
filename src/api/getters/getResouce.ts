import {APIResource, Resource} from "../types/Utility/CommonModel";
import Axios from "axios";

const getResource = <T extends Resource>(apiResource: APIResource<T>): Promise<T> => {
  return Axios.get(apiResource.url)
      .then(res => res.data);
}

export default getResource;
