import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import ItemCategory from "./ItemCategory";

export interface ItemPocket extends NamedResource {
  categories: NamedAPIResource<ItemCategory>[];
  names: Name[];
}

export default ItemPocket;
