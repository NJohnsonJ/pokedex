import {APIResourceList, NamedAPIResourceList, NamedResource, Resource} from "./types/Utility/CommonModel";

export type ListRequest<T extends Resource> = (pageRequest: PageRequest) => Promise<APIResourceList<T>>;

export type NamedListRequest<T extends NamedResource> = (pageRequest: PageRequest) => Promise<NamedAPIResourceList<T>>;

export type NameRequest<T extends NamedResource> = (nameOrId: string|number) => Promise<T>;

export type IdRequest<T extends Resource> = (id: number) => Promise<T>;

export interface PageRequest {
    limit?: number;
    offset?: number;
}
