import {NamedAPIResource, VersionEncounterDetail} from "../Utility/CommonModel";
import LocationArea from "../Location/LocationArea";

export interface LocationAreaEncounter {
  location_area: NamedAPIResource<LocationArea>;
  version_details: VersionEncounterDetail[];
}

export default LocationAreaEncounter;
