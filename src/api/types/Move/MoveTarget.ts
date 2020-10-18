import {Description, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Move from ".";

export interface MoveTarget extends NamedResource {
  descriptions: Description[];
  moves: NamedAPIResource<Move>[];
}

export default MoveTarget;
