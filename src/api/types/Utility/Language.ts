import {NamedAPIResource, NamedResource} from "./CommonModel";

export interface Language extends NamedResource {
  official: boolean;
  iso639: string;
  iso3166: string;
}

export interface Multilingual {
  language: NamedAPIResource<Language>
}

export default Language;
