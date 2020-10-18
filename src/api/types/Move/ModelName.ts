import {Description, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Move from ".";

export interface ModelName extends NamedResource {
  moves: NamedAPIResource<Move>[];
  descriptions: Description[];
}

export default ModelName;
