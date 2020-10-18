import {Description, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Move from ".";

export interface MoveCategory extends NamedResource {
  moves: NamedAPIResource<Move>[];
  descriptions: Description[];
}

export default MoveCategory;
