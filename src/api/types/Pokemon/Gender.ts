import {NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import PokemonSpecies from "./PokemonSpecies";

export interface Gender extends NamedResource {
  pokemon_species_details: PokemonSpeciesGender[];
  required_for_evolution: NamedAPIResource<PokemonSpecies>[];
}

export interface PokemonSpeciesGender {
  rate: number;
  pokemon_species: NamedAPIResource<PokemonSpecies>;
}

export default Gender;
