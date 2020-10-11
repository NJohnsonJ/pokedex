import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import PokemonSpecies from "./PokemonSpecies";

export interface EggGroup extends NamedResource {
  names: Name[];
  pokemon_species: NamedAPIResource<PokemonSpecies>[];
}

export default EggGroup;
