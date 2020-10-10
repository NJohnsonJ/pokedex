import {NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import {VersionGroup} from "./VersionGroup";

export interface Version extends NamedResource {
  version_group: NamedAPIResource<VersionGroup>;
}

export default VersionGroup;
