import {Description, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Move from "./Move";

export interface MoveTarget extends NamedResource {
  descriptions: Description[];
  moves: NamedAPIResource<Move>[];
}

export default MoveTarget;
