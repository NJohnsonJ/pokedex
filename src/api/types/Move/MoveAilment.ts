import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Move from "./Move";

export interface MoveAilment extends NamedResource {
  moves: NamedAPIResource<Move>[];
  names: Name[];
}

export default MoveAilment;
