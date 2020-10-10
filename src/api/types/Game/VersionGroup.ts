import {NamedAPIResource} from "../Utility/CommonModel";
import Generation from "./Generation";
import Pokedex from "./Pokedex";
import {Version} from "./Version";

export interface VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: NamedAPIResource<Generation>;
  move_learn_methods: NamedAPIResource<Generation>[];
  pokedexes: NamedAPIResource<Pokedex>[];
  versions: NamedAPIResource<Version>[];
}

export default VersionGroup;
