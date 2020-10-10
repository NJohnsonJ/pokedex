import {Effect, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Item from "./Item";

export interface ItemFlingEffect extends NamedResource {
  effect_entries: Effect[];
  items: NamedAPIResource<Item>[]
}

export default ItemFlingEffect;
