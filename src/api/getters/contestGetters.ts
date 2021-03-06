import {IdRequest, ListRequest, NamedListRequest, NameRequest} from "../Request";
import ContestType from "../types/Contest/ContestType";
import ContestEffect from "../types/Contest/ContestEffect";
import SuperContestEffect from "../types/Contest/SuperContestEffect";
import EncounterMethod from "../types/Encounter/EncounterMethod";
import EncounterCondition from "../types/Encounter/EncounterCondition";
import EncounterConditionValue from "../types/Encounter/EncounterConditionValue";
import EvolutionChain from "../types/Evolution/EvolutionChain";
import EvolutionTrigger from "../types/Evolution/EvolutionTrigger";
import {createListGetter, createResourceGetter} from "./getterCreator";

export const getContestType: NameRequest<ContestType> = createResourceGetter("contest");
export const getAllContestTypes: NamedListRequest<ContestType> = createListGetter("contest");
export const getContestEffect: IdRequest<ContestEffect> = createResourceGetter("contest-effect");
export const getAllContestEffects: ListRequest<ContestEffect> = createListGetter("contest-effect");
export const getSuperContestEffect: IdRequest<SuperContestEffect> = createResourceGetter("super-contest-effect");
export const getAllSuperContestEffects: ListRequest<SuperContestEffect> = createListGetter("super-contest-effect");
export const getEncounterMethod: NameRequest<EncounterMethod> = createResourceGetter("encounter-method");
export const getAllEncounterMethods: NamedListRequest<EncounterMethod> = createListGetter("encounter-method");
export const getEncounterCondition: NameRequest<EncounterCondition> = createResourceGetter("encounter-condition");
export const getAllEncounterConditions: NamedListRequest<EncounterMethod> = createListGetter("encounter-condition");
export const getEncounterConditionValue: NameRequest<EncounterConditionValue> = createResourceGetter("encounter-condition-value");
export const getAllEncounterConditionValues: NamedListRequest<EncounterConditionValue> = createListGetter("encounter-condition-value");
export const getEvolutionChain: IdRequest<EvolutionChain> = createResourceGetter("evolution-chain");
export const getAllEvolutionChains: ListRequest<EvolutionChain> = createListGetter("evolution-chain");
export const getEvolutionTrigger: NameRequest<EvolutionTrigger> = createResourceGetter("evolution-trigger");
export const getAllEvolutionTriggers: NamedListRequest<EvolutionTrigger> = createListGetter("evolution-trigger");
