import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Berry from "./Berry";
import ContestType from "../Contest/ContestType";

export interface BerryFlavor extends NamedResource {
  berries: FlavorBerryMap;
  contest_type: NamedAPIResource<ContestType>;
  names: Name[];
}

export interface FlavorBerryMap {
  potency: number;
  berry: NamedAPIResource<Berry>;
}

export default BerryFlavor;
