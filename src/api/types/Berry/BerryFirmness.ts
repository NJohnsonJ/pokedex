import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Berry from ".";

export interface BerryFirmness extends NamedResource {
  berries: NamedAPIResource<Berry>[];
  names: Name[];
}

export default BerryFirmness;
