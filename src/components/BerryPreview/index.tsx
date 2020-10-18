import React, { Fragment, useEffect, useState } from "react";
import { getBerry } from "../../api/getters/berryGetters";
import Berry from "../../api/types/Berry";
import getResource from "../../api/getters/getResouce";
import Item from "../../api/types/Item";
import BerryFlavorGraph from "./BerryFlavorGraph";
import { SpriteFrame } from "../SpriteFrame";
import FlavorTextBox from "../FlavorTextBox";
import { Grid } from "@material-ui/core"
import * as StringUtils from "../../util/StringUtils";

const flavors: {name: string, color: string}[] = [
  {
    name: "sour",
    color: "yellow"
  },
  {
    name: "spicy",
    color: "red",
  },
  {
    name: "dry",
    color: "blue",
  },
  {
    name: "sweet",
    color: "pink",
  },
  {
    name: "bitter",
    color: "green",
  }
];

const BerryPreview: React.FC<unknown> = () => {

  const [berry, setBerry] = useState<Berry | undefined>();
  const [item, setItem] = useState<Item | undefined>();

  useEffect(() => {
    getBerry(Math.ceil(Math.random() * 64))
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
      <h3>No. {berry.id}<i>/</i> {StringUtils.capitalize(berry.name)}</h3>
      <SpriteFrame sprite={item.sprites.default} size="sm" alt="berry sprite preview" />
      <FlavorTextBox entries={item.flavor_text_entries} language="en" />
      <p>SIZE<i>/</i> {berry.size / 10}cm</p>
      <p>FIRM<i>/</i> {berry.firmness.name}</p>
      <p>FLAVOR<i>/</i></p>
      <BerryFlavorGraph flavors={berry.flavors} />
    </Fragment>
  )
}

export default BerryPreview;
