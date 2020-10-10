import {Effect, Name, NamedAPIResource, VerboseEffect} from "../Utility/CommonModel";
import {VersionGroup} from "../Game/VersionGroup";
import Pokemon from "./index";
import Generation from "../Game/Generation";
import {Multilingual} from "../Utility/Language";

export interface Ability {
  is_main_series: boolean;
  generation: NamedAPIResource<Generation>;
  names: Name[];
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: AbilityPokemon[];
}

export interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource<VersionGroup>;
}

export interface AbilityFlavorText extends Multilingual {
  flavor_text: string;
  version_group: NamedAPIResource<VersionGroup>;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource<Pokemon>;
}

export default Ability;
