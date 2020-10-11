import {Effect, FlavorText, Resource} from "../Utility/CommonModel";

export interface ContestEffect extends Resource {
  appeal: number;
  jam: number;
  effect_entries: Effect[];
  flavor_text_entries: FlavorText[];
}

export default ContestEffect;
