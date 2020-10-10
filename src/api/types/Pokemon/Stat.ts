import {APIResource, Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Characteristic from "./Characteristic";
import Nature from "./Nature";
import Move from "../Move/Move";
import MoveDamageClass from "../Move/MoveDamageClass";

export interface Stat extends NamedResource {
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: APIResource<Characteristic>[];
  move_damage_class: NamedAPIResource<MoveDamageClass>;
  names: Name[];
}

export interface MoveStatAffectSets {
  increase: MoveStatAffect[];
  decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
  change: number;
  move: NamedAPIResource<Move>;
}

export interface NatureStatAffectSets {
  increase: NamedAPIResource<Nature>[];
  decrease: NamedAPIResource<Nature>[];
}

export default Stat;
