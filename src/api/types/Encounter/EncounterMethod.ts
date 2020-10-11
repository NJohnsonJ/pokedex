import {Name, NamedResource} from "../Utility/CommonModel";

export interface EncounterMethod extends NamedResource {
  order: number;
  names: Name[];
}

export default EncounterMethod;
