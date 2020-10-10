import {Name, NamedAPIResource} from "../Utility/CommonModel";
import {Multilingual} from "../Utility/Language";
import PokemonSpecies from "./PokemonSpecies";

export interface PokemonShape {
  awesome_names: AwesomeName[];
  names: Name[];
  pokemon_species: NamedAPIResource<PokemonSpecies>[];
}

export interface AwesomeName extends Multilingual {
  awesome_name: string;
}

export default PokemonShape;
