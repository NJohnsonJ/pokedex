import {IdRequest, ListRequest, NamedListRequest, NameRequest, PageRequest} from "../Request";
import Ability from "../types/Pokemon/Ability";
import Characteristic from "../types/Pokemon/Characteristic";
import EggGroup from "../types/Pokemon/EggGroup";
import Gender from "../types/Pokemon/Gender";
import GrowthRate from "../types/Pokemon/GrowthRate";
import Nature from "../types/Pokemon/Nature";
import PokeathlonStat from "../types/Pokemon/PokeathlonStat";
import Pokemon from "../types/Pokemon";
import PokemonColor from "../types/Pokemon/PokemonColor";
import PokemonForm from "../types/Pokemon/PokemonForm";
import PokemonHabitat from "../types/Pokemon/PokemonHabitat";
import PokemonShape from "../types/Pokemon/PokemonShape";
import PokemonSpecies from "../types/Pokemon/PokemonSpecies";
import Stat from "../types/Pokemon/Stat";
import Type from "../types/Pokemon/Type";
import {createResourceGetter, createListGetter} from "./getterCreator";
import LocationAreaEncounter from "../types/Pokemon/PokemonLocationArea";
import {APIResourceList} from "../types/Utility/CommonModel";
import Axios from "axios";
import config from "../config";

export const getAbility: NameRequest<Ability> = createResourceGetter("ability")
export const getAllAbilities: NamedListRequest<Ability> = createListGetter("ability")
export const getCharacteristic: IdRequest<Characteristic> = createResourceGetter("characteristic")
export const getAllCharacteristics: ListRequest<Characteristic> = createListGetter("characteristic")
export const getEggGroup: NameRequest<EggGroup> = createResourceGetter("egg-group")
export const getAllEggGroups: NamedListRequest<EggGroup> = createListGetter("egg-group")
export const getGender: NameRequest<Gender> = createResourceGetter("gender")
export const getAllGenders: NamedListRequest<Gender> = createListGetter("gender")
export const getGrowthRate: NameRequest<GrowthRate> = createResourceGetter("growth-rate")
export const getAllGrowthRates: NamedListRequest<GrowthRate> = createListGetter("growth-rate")
export const getNature: NameRequest<Nature> = createResourceGetter("nature")
export const getAllNatures: NamedListRequest<Nature> = createListGetter("nature")
export const getPokeathlonStat: NameRequest<PokeathlonStat> = createResourceGetter("pokeathlon-stat")
export const getAllPokeathlonStats: NamedListRequest<PokeathlonStat> = createListGetter("pokeathlon-stat")
export const getPokemon: NameRequest<Pokemon> = createResourceGetter("pokemon")
export const getAllPokemon: NamedListRequest<Pokemon> = createListGetter("pokemon")
export const getPokemonColor: NameRequest<PokemonColor> = createResourceGetter("pokemon-color")
export const getAllPokemonColors: NamedListRequest<PokemonColor> = createListGetter("pokemon-color")
export const getPokemonForm: NameRequest<PokemonForm> = createResourceGetter("pokemon-form")
export const getAllPokemonForms: NamedListRequest<PokemonForm> = createListGetter("pokemon-form")
export const getPokemonHabitat: NameRequest<PokemonHabitat> = createResourceGetter("pokemon-habitat")
export const getAllPokemonHabitats: NamedListRequest<PokemonHabitat> = createListGetter("pokemon-habitat")
export const getPokemonShape: NameRequest<PokemonShape> = createResourceGetter("pokemon-shape")
export const getAllPokemonShapes: NamedListRequest<PokemonShape> = createListGetter("pokemon-shape")
export const getPokemonSpecies: NameRequest<PokemonSpecies> = createResourceGetter("pokemon-species")
export const getAllPokemonSpecies: NamedListRequest<PokemonSpecies> = createListGetter("pokemon-species")
export const getStat: NameRequest<Stat> = createResourceGetter("stat")
export const getAllStats: NamedListRequest<Stat> = createListGetter("stat")
export const getType: NameRequest<Type> = createResourceGetter("type")
export const getAllTypes: NamedListRequest<Type> = createListGetter("type")

export function getLocationAreaEncounter(nameOrId: string|number): Promise<LocationAreaEncounter> {
    return Axios.get(`${config.baseUrl}/pokemon/${nameOrId}/encounters`)
        .then(res => res.data);
}
