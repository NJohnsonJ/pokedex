import {NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import {VersionGroup} from "./VersionGroup";
import PokemonSpecies from "../Pokemon/PokemonSpecies";
import {Type} from "../Pokemon/Type";
import Ability from "../Pokemon/Ability";
import Region from "../Location/Region";
import Move from "../Move/Move";

export interface Generation extends NamedResource {
  abilities: NamedAPIResource<Ability>[];
  main_region: NamedAPIResource<Region>;
  moves: NamedAPIResource<Move>[];
  pokemon_species: NamedAPIResource<PokemonSpecies>[];
  types: NamedAPIResource<Type>[];
  version_groups: NamedAPIResource<VersionGroup>[];
}

export default Generation;
