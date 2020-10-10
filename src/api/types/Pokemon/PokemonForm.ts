import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import {VersionGroup} from "../Game/VersionGroup";
import Pokemon from "./index";

export interface PokemonForm extends NamedResource {
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource<Pokemon>;
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource<VersionGroup>;
  names: Name[];
  form_names: Name[];
}

export interface PokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

export default PokemonForm;
