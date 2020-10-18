import React from "react";
import { BerryFlavorMap } from "../../api/types/Berry";
import FlavorBadge, { Flavor } from "./FlavorBadge";
import styled from "styled-components";
import MagnitudeGraph from "../MagnitudeGraph";

interface Props {
  flavors: BerryFlavorMap[]
}

const BerryFlavorGraph: React.FC<Props> = ({ flavors }: Props) => {

  const order: Flavor[] = [
    "spicy",
    "dry",
    "sweet",
    "bitter",
    "sour",
  ];

  return (
    <PlacementBox>
      <GridItem
        row="1"
        column="2"
        justify="center"
      >
        <FlavorBadge flavor={order[0]} />
      </GridItem>
      <GridItem
        row="2"
        column="3"
        align="center"
        justify="start"
      >
        <FlavorBadge flavor={order[1]} />
      </GridItem>
      <GridItem
        row="5"
        column="2"
        justify="end"
      >
        <FlavorBadge flavor={order[2]} />
      </GridItem>
      <GridItem
        row="5"
        column="2"
        justify="start"
      >
        <FlavorBadge flavor={order[3]} />
      </GridItem>
      <GridItem
        row="2"
        column="1"
        align="center"
        justify="end"
      >
        <FlavorBadge flavor={order[4]} />
      </GridItem>
      <MagnitudeGraph
        values={flavors.map(flavor => flavor.potency)}
        max={40}
        number={5}
      />
    </PlacementBox>
  )
}

const PlacementBox = styled.div`
  display: grid;
  width: auto;
  height: auto;
  grid-template-rows: 1fr 3fr auto 3fr 1fr;
  grid-template-columns: 1fr auto 1fr;
  canvas {
    grid-column: 2;
    grid-row: 2 / span 3;
    align-self: center;
    justify-self: center;
  }
`;

const GridItem = styled.div<{ row: string, column: string, align?: string, justify?: string }>`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  align-self: ${props => props.align};
  justify-self: ${props => props.justify};
`;

export default BerryFlavorGraph;
