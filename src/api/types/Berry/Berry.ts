import {NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import {Type} from "../Pokemon/Type";
import BerryFirmness from "./BerryFirmness";
import BerryFlavor from "./BerryFlavor";
import {Item} from "../Item/Item";

export interface Berry extends NamedResource {
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedAPIResource<BerryFirmness>;
  flavors: BerryFlavorMap[];
  item: NamedAPIResource<Item>;
  natural_gift_type: NamedAPIResource<Type>;
}

export interface BerryFlavorMap {
  potency: number;
  flavor: NamedAPIResource<BerryFlavor>;
}

export default Berry;
