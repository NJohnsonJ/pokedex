import {
  APIResource,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  NamedResource,
  VerboseEffect,
  VersionGroupFlavorText
} from "../Utility/CommonModel";
import EvolutionChain from "../Evolution/EvolutionChain";
import Pokemon from "../Pokemon";
import {Version} from "../Game/Version";
import ItemAttribute from "./ItemAttribute";
import ItemFlingEffect from "./ItemFlingEffect";
import ItemCategory from "./ItemCategory";

export interface Item extends NamedResource {
  cost: number,
  fling_power: number;
  fling_effect: NamedAPIResource<ItemFlingEffect>;
  attributes: NamedAPIResource<ItemAttribute>[];
  category: NamedAPIResource<ItemCategory>;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: APIResource<EvolutionChain>;
  machines: MachineVersionDetail[];
}

export interface ItemSprites {
  default: string;
}

export interface ItemHolderPokemon {
  pokemon: NamedAPIResource<Pokemon>;
  version_details: ItemHolderPokemonVersionDetail;
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedAPIResource<Version>;
}

export default Item;
