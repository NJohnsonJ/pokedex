import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import PokemonSpecies from "./PokemonSpecies";

export interface PokemonColor extends NamedResource {
  names: Name[];
  pokemon_species: NamedAPIResource<PokemonSpecies>[];
}

export default PokemonColor;
