import {IdRequest, ListRequest, NamedListRequest, NameRequest} from "../Request";
import Generation from "../types/Game/Generation";
import Pokedex from "../types/Game/Pokedex";
import {Version} from "../types/Game/Version";
import VersionGroup from "../types/Game/VersionGroup";
import {createListGetter, createResourceGetter} from "./getterCreator";

export const getGeneration: NameRequest<Generation> = createResourceGetter("generation");
export const getAllGenerations: NamedListRequest<Generation> = createListGetter("generation");
export const getPokedex: NameRequest<Pokedex> = createResourceGetter("pokedex");
export const getAllPokedexes: NamedListRequest<Pokedex> = createListGetter("pokedex");
export const getVersion: NameRequest<Version> = createResourceGetter("version");
export const getAllVersions: NamedListRequest<Version> = createListGetter("version");
export const getVersionGroup: IdRequest<VersionGroup> = createResourceGetter("version-group");
export const getAllVersionGroups: ListRequest<VersionGroup> = createListGetter("version-group");
