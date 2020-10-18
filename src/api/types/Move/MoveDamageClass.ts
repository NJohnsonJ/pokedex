import {Description, Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Move from ".";

export interface MoveDamageClass extends NamedResource {
  descriptions: Description[];
  moves: NamedAPIResource<Move>;
}

export default MoveDamageClass;
