import {NamedAPIResource, NamedResource, VersionGameIndex} from "../Utility/CommonModel";
import {VersionGroup} from "../Game/VersionGroup";
import PokemonForm from "./PokemonForm";
import PokemonSpecies from "./PokemonSpecies";
import {Type} from "./Type";
import Stat from "./Stat";
import {Version} from "../Game/Version";
import {Item} from "../Item";
import {Move} from "../Move";
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
  sprites: PokemonSprites;
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
  other?: OtherSprites;
  versions?: VersionSprites;
}

export interface OtherSprites {
  dream_world?: {
    front_default: string;
    front_female: string|null;
  };
  official_artwork?: {
    front_default: string;
  };
}

export interface VersionSprites {
  "generation-i"?: {
    "red-blue": GenOneSprites;
    yellow: GenOneSprites;
  };
  "generation-ii"?: {
    gold: BaseSprites;
    silver: BaseSprites;
    crystal: BaseSprites;
  };
  "generation-iii"?: {
    emerald: FrontSprites;
    "firered-leafgreen": BaseSprites;
    "ruby-sapphire": BaseSprites;
  };
  "generation-iv"?: {
    "diamond-pearl": AllSprites;
    "heartgold-soulsilver": AllSprites;
    platinum: AllSprites;
  };
  "generation-v"?: {
    "black-white": AllSprites & {
      animated: AllSprites;
    };
  };
  "generation-vi"?: {
    "omegaruby-alphasapphire": FrontSprites & FrontFemaleSprites;
    "x-y": FrontSprites & FrontFemaleSprites;
  };
  "generation-vii"?: {
    icons: FrontSprites;
    "ultra-sun-ultra-moon": FrontSprites & FemaleSprites;
  };
  "generation-viii"?: {
    icons: FrontSprites;
  };
}

export interface GenOneSprites {
  front_default: string;
  front_gray: string;
  back_default: string;
  back_gray: string;
}

export interface FrontSprites {
  front_default: string;
  front_shiny: string;
}

export interface BackSprites {
  back_default: string;
  back_shiny: string;
}

export interface BaseSprites extends FrontSprites, BackSprites {}

export interface FrontFemaleSprites {
  front_female: string;
  front_shiny_female: string;
}

export interface BackFemaleSprites {
  back_female: string;
  back_shiny_female: string;
}

export interface FemaleSprites extends FrontFemaleSprites, BackFemaleSprites {}

export interface AllSprites extends BaseSprites, FemaleSprites {}

export default Pokemon;
