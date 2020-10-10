import {Description, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import PokemonSpecies from "./PokemonSpecies";

export interface GrowthRate extends NamedResource {
  formula: string;
  descriptions: Description[];
  levels: GrowthRateExperienceLevel[];
  pokemon_species: NamedAPIResource<PokemonSpecies>[];
}

export interface GrowthRateExperienceLevel {
  level: number;
  experience: number;
}

export default GrowthRate;
