import {NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import BerryFlavor from "../Berry/BerryFlavor";
import {Multilingual} from "../Utility/Language";

export interface ContestType extends NamedResource {
  berry_flavor: NamedAPIResource<BerryFlavor>;
  names: ContestName[];
}

export interface ContestName extends Multilingual {
  name: string;
  color: string;
}

export default ContestType;
