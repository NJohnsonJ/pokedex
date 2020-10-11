import {NamedListRequest, NameRequest} from "../Request";
import Language from "../types/Utility/Language";
import {createListGetter, createResourceGetter} from "./getterCreator";

export const getLanguage: NameRequest<Language> = createResourceGetter("language");
export const getAllLanguages: NamedListRequest<Language> = createListGetter("language");
