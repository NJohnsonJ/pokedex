import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import BerryFlavor from "../Berry/BerryFlavor";
import PokeathlonStat from "./PokeathlonStat";
import Stat from "./Stat";
import MoveBattleStyle from "../Move/MoveBattleStyle";

export interface Nature extends NamedResource {
  decreased_stat: NamedAPIResource<Stat>;
  increased_stat: NamedAPIResource<Stat>;
  hates_flavor: NamedAPIResource<BerryFlavor>;
  likes_flavor: NamedAPIResource<BerryFlavor>;
  pokeathlon_stat_changes: NatureStatChange[];
  move_battle_style_preferences: MoveBattleStylePreference[];
  names: Name[];
}

export interface NatureStatChange {
  max_change: number;
  pokeathlon_stat: NamedAPIResource<PokeathlonStat>;
}

export interface MoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: NamedAPIResource<MoveBattleStyle>;
}

export default Nature;
