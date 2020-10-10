import {Resource} from "../Utility/CommonModel";

export interface Characteristic extends Resource {
  gene_modulo: number;
  possible_values: number[];
}

export default Characteristic;
