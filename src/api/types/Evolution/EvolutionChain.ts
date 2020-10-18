import {NamedAPIResource, Resource} from "../Utility/CommonModel";
import PokemonSpecies from "../Pokemon/PokemonSpecies";
import {Type} from "../Pokemon/Type";
import EvolutionTrigger from "./EvolutionTrigger";
import {Item} from "../Item";
import Move from "../Move";

export interface EvolutionChain extends Resource {
  baby_trigger_item: NamedAPIResource<Item>;
  chain: ChainLink;
}

export interface ChainLink {
  is_baby: boolean;
  species: NamedAPIResource<PokemonSpecies>;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
}

export interface EvolutionDetail {
  item: NamedAPIResource<Item>;
  trigger: NamedAPIResource<EvolutionTrigger>;
  gender: number;
  held_item: NamedAPIResource<Item>;
  known_move: NamedAPIResource<Move>;
  know_move_type: NamedAPIResource<Move>;
  location: NamedAPIResource<Location>;
  min_level: number;
  min_happiness: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource<PokemonSpecies>;
  party_type: NamedAPIResource<Type>;
  relative_physical_stats: number;
  time_of_day: "day"|"night"|""; // TODO verify this
  trade_species: NamedAPIResource<PokemonSpecies>;
  turn_upside_down: boolean;
}

export default EvolutionChain;
