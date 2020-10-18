import {NamedListRequest, NameRequest} from "../Request";
import Item from "../types/Item";
import ItemAttribute from "../types/Item/ItemAttribute";
import ItemCategory from "../types/Item/ItemCategory";
import ItemFlingEffect from "../types/Item/ItemFlingEffect";
import ItemPocket from "../types/Item/ItemPocket";
import {createResourceGetter, createListGetter}from "./getterCreator";

export const getItem: NameRequest<Item> = createResourceGetter("item");
export const getAllItems: NamedListRequest<Item> = createListGetter("item");
export const getItemAttribute: NameRequest<ItemAttribute> = createResourceGetter("item-attribute");
export const getAllItemAttributes: NamedListRequest<ItemAttribute> = createListGetter("item-attribute");
export const getItemCategory: NameRequest<ItemCategory> = createResourceGetter("item-category");
export const getAllItemCategories: NamedListRequest<ItemCategory> = createListGetter("item-category");
export const getItemFlingEffect: NameRequest<ItemFlingEffect> = createResourceGetter("item-fling-effect");
export const getAllItemFlingEffects: NamedListRequest<ItemFlingEffect> = createListGetter("item-fling-effect");
export const getItemPocket: NameRequest<ItemPocket> = createResourceGetter("item-pocket");
export const getAllItemPockets: NamedListRequest<ItemPocket> = createListGetter("item-pocket");
