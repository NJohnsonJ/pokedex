import {IdRequest, ListRequest} from "../Request";
import Machine from "../types/Machine";
import {createListGetter, createResourceGetter} from "./getterCreator";

export const getMachine: IdRequest<Machine> = createResourceGetter("machine");
export const getAllMachines: ListRequest<Machine> = createListGetter("machine");
