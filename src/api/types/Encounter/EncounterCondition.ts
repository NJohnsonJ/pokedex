import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import EncounterConditionValue from "./EncounterConditionValue";

export interface EncounterCondition extends NamedResource {
  names: Name[];
  values: NamedAPIResource<EncounterConditionValue>[];
}

export default EncounterCondition;
