import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Nature from "./Nature";

export interface PokeathlonStat extends NamedResource {
  names: Name[];
  affecting_natures: NaturePokeathlonStatAffectSets;
}

export interface NaturePokeathlonStatAffectSets {
  increase: NaturePokeathlonStatAffect[];
  decrease: NaturePokeathlonStatAffect[];
}

export interface NaturePokeathlonStatAffect {
  max_change: number;
  nature: NamedAPIResource<Nature>;
}

export default PokeathlonStat;
