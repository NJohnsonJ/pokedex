import {NamedListRequest, NameRequest} from "../Request";
import Move from "../types/Move/Move";
import MoveAilment from "../types/Move/MoveAilment";
import MoveBattleStyle from "../types/Move/MoveBattleStyle";
import MoveCategory from "../types/Move/MoveCategory";
import MoveDamageClass from "../types/Move/MoveDamageClass";
import MoveLearnMethod from "../types/Move/MoveLearnMethod";
import MoveTarget from "../types/Move/MoveTarget";
import {createListGetter, createResourceGetter} from "./getterCreator";

export const getMove: NameRequest<Move> = createResourceGetter("move");
export const getAllMoves: NamedListRequest<Move> = createListGetter("move");
export const getMoveAilment: NameRequest<MoveAilment> = createResourceGetter("move-ailment");
export const getAllMoveAilments: NamedListRequest<MoveAilment> = createListGetter("move-ailment");
export const getMoveBattleStyle: NameRequest<MoveBattleStyle> = createResourceGetter("move-batle-style");
export const getAllMoveBattleStyles: NamedListRequest<MoveBattleStyle> = createListGetter("move-batle-style");
export const getMoveCategory: NameRequest<MoveCategory> = createResourceGetter("move-category");
export const getAllMoveCategories: NamedListRequest<MoveCategory> = createListGetter("move-category");
export const getMoveDamageClass: NameRequest<MoveDamageClass> = createResourceGetter("move-damage-class");
export const getAllMoveDamageClasses: NamedListRequest<MoveDamageClass> = createListGetter("move-damage-class");
export const getMoveLearnMethod: NameRequest<MoveLearnMethod> = createResourceGetter("move-learn-method");
export const getAllMoveLearnMethods: NamedListRequest<MoveLearnMethod> = createListGetter("move-learn-method");
export const getMoveTarget: NameRequest<MoveTarget> = createResourceGetter("move-target");
export const getAllMoveTargets: NamedListRequest<MoveTarget> = createListGetter("move-target");
