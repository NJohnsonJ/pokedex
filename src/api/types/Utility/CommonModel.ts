import Machine from "../Machine";
import {Multilingual} from "./Language";
import EncounterMethod from "../Encounter/EncounterMethod";
import EncounterCondition from "../Encounter/EncounterCondition";
import Generation from "../Game/Generation";
import VersionGroup from "../Game/VersionGroup";
import {Version} from "../Game/Version";

export interface Resource {
  id: number;
}

export interface NamedResource extends Resource {
  name: string;
  names: Name[];
}

export interface Name extends Multilingual {
  name: string;
}

export class APIResource<T> {
  url: string = "";
}

export interface NamedAPIResource<T> extends APIResource<T> {
  name: string;
}

export interface Description extends Multilingual {
  description: string;
}

export interface Effect extends Multilingual {
  effect: string;
}

export interface Effect extends Multilingual {
  effect: string;
}

export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: NamedAPIResource<EncounterCondition>;
  change: number;
  method: NamedAPIResource<EncounterMethod>;
}

export interface FlavorText extends Multilingual, Versioned {
  flavor_text: string;
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedAPIResource<Generation>;
}

export interface MachineVersionDetail {
  machine: APIResource<Machine>;
  version_group: NamedAPIResource<VersionGroup>;
}

export interface VerboseEffect extends Multilingual {
  effect: string;
  short_effect: string;
}

export interface VersionEncounterDetail extends Versioned {
  max_chance: number;
  encounter_details: Encounter[];
}

export interface VersionGameIndex extends Versioned {
  game_index: number;
}

export interface VersionGroupFlavorText extends Multilingual {
  text: string;
}

export interface Versioned {
  version: NamedAPIResource<Version>
}
