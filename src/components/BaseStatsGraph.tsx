import React from "react";
import styled from "styled-components";
import MagnitudeGraph from "./MagnitudeGraph";
import Badge from "./Badge";

interface Props {
  values: number[]; // The magnitudes
}

const labels = ["HP","ATK","DEF","S.ATK","S.DEF","SPD"];
const colors = ["blue","red","gray","pink","purple","yellow"];

const BaseStatsGraph: React.FC<Props> = ({values}) => {

    return (
        <PlacementBox>
            <GridItem
                column="2"
                row="1"
                justify="center"
            >
                <Badge color={colors[0]}>
                    {labels[0]}
                </Badge>
            </GridItem>
            <GridItem
                column="3"
                row="2"
                align="start"
            >
                <Badge color={colors[1]}>
                    {labels[1]}
                </Badge>
            </GridItem>
            <GridItem
                column="3"
                row="2"
                align="end"
            >
            <Badge color={colors[2]}>
                {labels[2]}
            </Badge>
            </GridItem>
            <GridItem
                row="3"
                column="2"
                justify="center"
            >
                <Badge color={colors[3]}>
                    {labels[3]}
                </Badge>
            </GridItem>
            <GridItem
                row="2"
                column="1"
                align="end"
            >
                <Badge color={colors[4]}>
                    {labels[4]}
                </Badge>
            </GridItem>
            <GridItem
                row="2"
                column="1"
                align="start"
            >
                <Badge color={colors[5]}>
                    {labels[5]}
                </Badge>
            </GridItem>
            <MagnitudeGraph
                values={values}
                max={255}
                number={6}
            />
        </PlacementBox>
    )
}

const PlacementBox = styled.div`
  display: grid;
  width: auto;
  height: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr auto;
  canvas {
    grid-column: 2;
    grid-row: 2;
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

export default BaseStatsGraph;