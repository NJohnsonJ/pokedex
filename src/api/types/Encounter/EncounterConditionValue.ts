import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import EncounterCondition from "./EncounterCondition";

export interface EncounterConditionValue extends NamedResource {
  condition: NamedAPIResource<EncounterCondition>;
  names: Name[];
}

export default EncounterConditionValue;
