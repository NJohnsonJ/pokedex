import {NamedListRequest, NameRequest} from "../Request";
import Location from "../types/Location";
import LocationArea from "../types/Location/LocationArea";
import PalParkArea from "../types/Location/PalParkArea";
import Region from "../types/Location/Region";
import {createListGetter, createResourceGetter} from "./getterCreator";

export const getLocation: NameRequest<Location> = createResourceGetter("location");
export const getAllLocations: NamedListRequest<Location> = createListGetter("location");
export const getLocationArea: NameRequest<LocationArea> = createResourceGetter("location-area");
export const getAllLocationAreas: NamedListRequest<LocationArea> = createListGetter("location-area");
export const getPalParkArea: NameRequest<PalParkArea> = createResourceGetter("pal-park-area");
export const getAllPalParkAreas: NamedListRequest<PalParkArea> = createListGetter("pal-park-area");
export const getRegion: NameRequest<Region> = createResourceGetter("region");
export const getAllRegions: NamedListRequest<Region> = createListGetter("region");
