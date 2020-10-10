import {NamedAPIResource} from "../Utility/CommonModel";
import {VersionGroup} from "../Game/VersionGroup";
import {Item} from "../Item/Item";
import Move from "../Move/Move";

export interface Machine {
  id: number;
  item: NamedAPIResource<Item>;
  move: NamedAPIResource<Move>;
  version_group: NamedAPIResource<VersionGroup>;
}

export default Machine;