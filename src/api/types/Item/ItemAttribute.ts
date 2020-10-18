import {Description, Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Item from ".";

export interface ItemAttribute extends NamedResource{
  items: NamedAPIResource<Item>[];
  names: Name[];
  descriptions: Description[];
}

export default ItemAttribute;
