import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Item from ".";
import ItemPocket from "./ItemPocket";

export interface ItemCategory extends NamedResource {
  items: NamedAPIResource<Item>[];
  names: Name[];
  pocket: NamedAPIResource<ItemPocket>;
}

export default ItemCategory;
