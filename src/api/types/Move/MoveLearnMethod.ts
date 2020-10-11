import {Description, NamedAPIResource, NamedResource} from "../Utility/CommonModel";
import VersionGroup from "../Game/VersionGroup";

export interface MoveLearnMethod extends NamedResource {
  descriptions: Description[];
  version_groups: NamedAPIResource<VersionGroup>;
}

export default MoveLearnMethod;
