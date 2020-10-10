import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import PokemonSpecies from "../Pokemon/PokemonSpecies";

export interface PalParkArea extends NamedResource {
  names: Name[];
  pokemon_encounters: PalParkEncounterSpecies[];
}

export interface PalParkEncounterSpecies {
  base_score: number;
  rate: number;
  pokemon_species: NamedAPIResource<PokemonSpecies>;
}

export default PalParkArea;
