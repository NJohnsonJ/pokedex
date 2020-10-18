import {
  APIResource,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  NamedResource,
  VerboseEffect
} from "../Utility/CommonModel";
import ContestType from "../Contest/ContestType";
import ContestEffect from "../Contest/ContestEffect";
import MoveDamageClass from "./MoveDamageClass";
import {AbilityEffectChange} from "../Pokemon/Ability";
import Generation from "../Game/Generation";
import SuperContestEffect from "../Contest/SuperContestEffect";
import Type from "../Pokemon/Type";
import Language, {Multilingual} from "../Utility/Language";
import VersionGroup from "../Game/VersionGroup";
import Stat from "../Pokemon/Stat";
import MoveTarget from "./MoveTarget";
import MoveAilment from "./MoveAilment";

export interface Move extends NamedResource {
  accuracy: number;
  effect_change: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: ContestComboSets;
  contest_type: NamedAPIResource<ContestType>;
  contest_effect: NamedAPIResource<ContestEffect>;
  damage_class: NamedAPIResource<MoveDamageClass>;
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: MoveFlavorText[];
  generation: NamedAPIResource<Generation>;
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  past_values: PastMoveStatValues[];
  stat_changes: MoveStatChange[];
  super_contest_effect: APIResource<SuperContestEffect>;
  target: NamedAPIResource<MoveTarget>;
  type: NamedAPIResource<Type>;
}

export interface ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}

export interface ContestComboDetail {
  use_before: NamedAPIResource<Move>[];
  use_after: NamedAPIResource<Move>[];
}

export interface MoveFlavorText extends Multilingual {
  flavor_text: string;
  version_group: NamedAPIResource<VersionGroup>;
}

export interface MoveMetaData {
  ailment: NamedAPIResource<MoveAilment>;
  category: NamedAPIResource<MoveCategory>;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

interface MoveCategory {
  // TODO missing from the docs
}

export interface MoveStatChange {
  change: number;
  stat: NamedAPIResource<Stat>;
}

export interface PastMoveStatValues {
  accuracy: number;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: VerboseEffect[];
  type: NamedAPIResource<Type>;
  version_group: NamedAPIResource<VersionGroup>;
}

export default Move;
