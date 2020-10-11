import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Generation from "../Game/Generation";
import Pokedex from "../Game/Pokedex";
import VersionGroup from "../Game/VersionGroup";

export interface Region extends NamedResource {
  locations: NamedAPIResource<Location>[];
  names: Name[];
  main_generation: NamedAPIResource<Generation>;
  pokedexes: NamedAPIResource<Pokedex>[];
  version_groups: NamedAPIResource<VersionGroup>;
}

export default Region;
