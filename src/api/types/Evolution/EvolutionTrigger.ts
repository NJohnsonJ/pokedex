import {Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import PokemonSpecies from "../Pokemon/PokemonSpecies";

export interface EvolutionTrigger extends NamedResource {
  names: Name[];
  pokemon_species: NamedAPIResource<PokemonSpecies>;
}

export default EvolutionTrigger;
