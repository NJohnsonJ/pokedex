import {GenerationGameIndex, Name, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import Pokemon from "./index";
import Generation from "../Game/Generation";
import MoveDamageClass from "../Move/MoveDamageClass";
import Move from "../Move";

export interface Type extends NamedResource {
  damage_relations: TypeRelations;
  game_indices: GenerationGameIndex[];
  generation: NamedAPIResource<Generation>;
  move_damage_class: NamedAPIResource<MoveDamageClass>;
  names: Name[];
  pokemon: TypePokemon[];
  moves: NamedAPIResource<Move>[];
}

export interface TypePokemon {
  slot: number;
  pokemon: NamedAPIResource<Pokemon>;
}

export interface TypeRelations {
  no_damage_to: NamedAPIResource<Type>[];
  half_damage_to: NamedAPIResource<Type>[];
  double_damage_to: NamedAPIResource<Type>[];
  no_damage_from: NamedAPIResource<Type>[];
  half_damage_from: NamedAPIResource<Type>[];
  double_damage_from: NamedAPIResource<Type>[];
}

export default Type;
