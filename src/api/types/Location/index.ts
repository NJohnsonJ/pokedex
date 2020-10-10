import {GenerationGameIndex, Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Region from "./Region";
import LocationArea from "./LocationArea";

export interface Location extends NamedResource {
  region: NamedAPIResource<Region>;
  names: Name[];
  game_indices: GenerationGameIndex[];
  areas: NamedAPIResource<LocationArea>[];
}

export default Location;
