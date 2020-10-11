import {Description, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Move from "./Move";

export interface MoveBattleStyle extends NamedResource {
  moves: NamedAPIResource<Move>[];
  descriptions: Description[];
}

export default MoveBattleStyle;
