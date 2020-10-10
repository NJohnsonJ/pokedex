import Location from "./index";
import {Name, NamedAPIResource, NamedResource, VersionEncounterDetail} from "../Utility/CommonModel";
import EncounterMethod from "../Encounter/EncounterMethod";
import {Version} from "../Game/Version";
import Pokemon from "../Pokemon";

export interface LocationArea extends NamedResource {
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: NamedAPIResource<Location>;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

export interface EncounterMethodRate {
  encounter_method: NamedAPIResource<EncounterMethod>;
  version_details: EncounterVersionDetails[];
}

export interface EncounterVersionDetails {
  rate: number;
  version: NamedAPIResource<Version>;
}

export interface PokemonEncounter {
  pokemon: NamedAPIResource<Pokemon>;
  version_details: VersionEncounterDetail[];
}

export default LocationArea;
