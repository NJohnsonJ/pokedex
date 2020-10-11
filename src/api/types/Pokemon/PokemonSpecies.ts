import {APIResource, Description, FlavorText, Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Pokemon from "./index";
import GrowthRate from "./GrowthRate";
import EggGroup from "./EggGroup";
import PokemonColor from "./PokemonColor";
import PokemonShape from "./PokemonShape";
import PokemonHabitat from "./PokemonHabitat";
import EvolutionChain from "../Evolution/EvolutionChain";
import Generation from "../Game/Generation";
import {Multilingual} from "../Utility/Language";
import Pokedex from "../Game/Pokedex";
import PalParkArea from "../Location/PalParkArea";

export interface PokemonSpecies extends NamedResource {
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_encounter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource<GrowthRate>;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: NamedAPIResource<EggGroup>[];
  color: NamedAPIResource<PokemonColor>;
  shape: NamedAPIResource<PokemonShape>;
  evolves_from_species: NamedAPIResource<PokemonSpecies>;
  evolution_chain: APIResource<EvolutionChain>;
  habitat: NamedAPIResource<PokemonHabitat>;
  generation: NamedAPIResource<Generation>;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}

export interface Genus extends Multilingual {
  genus: string;
}

export interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: NamedAPIResource<Pokedex>;
}

export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: NamedAPIResource<PalParkArea>;
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedAPIResource<Pokemon>;
}

export default PokemonSpecies;
