import {FlavorText, NamedAPIResource, Resource} from "../Utility/CommonModel";
import Move from "../Move";

export interface SuperContestEffect extends Resource {
  appeal: number;
  flavor_text_entries: FlavorText[];
  moves: NamedAPIResource<Move>[];
}

export default SuperContestEffect;
