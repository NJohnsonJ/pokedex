import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import PokemonSpecies from "./PokemonSpecies";

export interface PokemonHabitat extends NamedResource {
  names: Name[];
  pokemon_species: NamedAPIResource<PokemonSpecies>[];
}

export default PokemonHabitat;
