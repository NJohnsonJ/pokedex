import {NamedAPIResource, NamedResource, VersionGameIndex} from "../Utility/CommonModel";
import {VersionGroup} from "../Game/VersionGroup";
import PokemonForm from "./PokemonForm";
import PokemonSpecies from "./PokemonSpecies";
import {Type} from "./Type";
import Stat from "./Stat";
import {Version} from "../Game/Version";
import {Item} from "../Item/Item";
import {Move} from "../Move/Move";
import MoveLearnMethod from "../Move/MoveLearnMethod";

export interface Pokemon extends NamedResource {
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource<PokemonForm>[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites[];
  species: NamedAPIResource<PokemonSpecies>;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource<any>;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource<Type>;
}

export interface PokemonHeldItem {
  item: NamedAPIResource<Item>;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version : NamedAPIResource<Version>;
  rarity: number;
}

export interface PokemonMove {
  move: NamedAPIResource<Move>;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource<MoveLearnMethod>;
  version_group: NamedAPIResource<VersionGroup>;
  level_learned_at: number;
}

export interface PokemonStat {
  stat: NamedAPIResource<Stat>;
  effort: number;
  base_stat: number;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export default Pokemon;
