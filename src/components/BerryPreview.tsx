import React, {Fragment, useEffect, useState} from "react";
import {getBerry} from "../api/getters/berryGetters";
import Berry from "../api/types/Berry/Berry";
import getResource from "../api/getters/getResouce";
import Item from "../api/types/Item/Item";
import BerryFlavorGraph from "./BerryFlavorGraph";

const BerryPreview: React.FC<unknown> = () => {

  const [berry, setBerry] = useState<Berry|undefined>();
  const [item, setItem] = useState<Item|undefined>();

  useEffect(() => {
    getBerry(Math.ceil(Math.random()*64))
        .then(setBerry)
  }, [])

  useEffect(() => {
    if (berry)
      getResource<Item>(berry.item)
          .then(setItem)
  }, [berry])

  if (!item || !berry)
    return null;

  return (
      <Fragment>
        <h3>No. {berry.id}/ {berry.name} berry</h3>
        <img src={item.sprites.default} alt="berry sprite preview"/>
        <p>SIZE/ {berry.size}mm</p>
        <p>FIRM/ {berry.firmness.name}</p>
        <BerryFlavorGraph flavors={berry.flavors}/>
        <p>{item.flavor_text_entries[0].text}</p>
      </Fragment>
  )
}

export default BerryPreview;
