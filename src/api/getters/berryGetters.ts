import {NamedListRequest, NameRequest} from "../Request";
import Berry from "../types/Berry/Berry";
import BerryFirmness from "../types/Berry/BerryFirmness";
import BerryFlavor from "../types/Berry/BerryFlavor";
import {createListGetter, createResourceGetter} from "./getterCreator";

export const getBerry: NameRequest<Berry> = createResourceGetter("berry");
export const getAllBerries: NamedListRequest<Berry> = createListGetter("berry");
export const getBerryFirmness: NameRequest<BerryFirmness> = createResourceGetter("berry-firmness");
export const getAllBerryFirmness: NamedListRequest<BerryFirmness> = createListGetter("berry-firmness");
export const getBerryFlavor: NameRequest<BerryFlavor> = createResourceGetter("berry-flavor");
export const getAllBerryFlavors: NamedListRequest<BerryFlavor> = createListGetter("berry-flavor");
