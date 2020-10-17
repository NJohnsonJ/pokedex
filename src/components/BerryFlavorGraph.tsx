import React, {useEffect, useMemo, useRef} from "react";
import {BerryFlavorMap} from "../api/types/Berry/Berry";
import FlavorBadge, {Flavor} from "./FlavorBadge";
import styled from "styled-components";

interface Props {
  flavors: BerryFlavorMap[]
}

interface Point {
  x: number;
  y: number;
}

const center: Point = {
  x: 100,
  y: 100
}

const BerryFlavorGraph: React.FC<Props> = ({flavors}: Props) => {

  const size = 100;

  const points = useMemo(() => calculatePentagonPoints(size), []);

  const canvas = useRef<HTMLCanvasElement|null>(null);

  // Draw the pentagon after the initial render so the ref isn't null
  useEffect(() => {
    if (canvas && canvas.current) {
      const ctx = canvas.current.getContext("2d");
      if (!ctx) return;

      ctx.beginPath();
      for (let point of points) {
        ctx.lineTo(point.x, point.y);
      }
      ctx.lineTo(points[0].x, points[0].y);
      ctx.fillStyle = "#fff3ab"
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000"
      ctx.stroke();

      ctx.beginPath();
      for (let point of points) {
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(point.x, point.y);
      }
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#a4a4a4"
      ctx.stroke();

      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        let index = i % 5;
        const point = calculatePoint(flavors[index].potency, center, points[index]);
        ctx.lineTo(point.x, point.y);
      }

      ctx.fillStyle = "rgb(0,155,155)";
      ctx.fill();
      ctx.strokeStyle = "#000";
      ctx.stroke();
    }
  }, [])

  if (!canvas)
    return null;

  // Value is 0-40
  function calculatePoint(potency: number, center: Point, end: Point): Point {
    const xLength = Math.abs(end.x - center.x);
    const yLength = Math.abs(end.y - center.y);
    const hypotenuse = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
    const length = hypotenuse * (potency / 40) || 5;

    let xDirection = Math.sign(end.x - center.x);
    let yDirection = Math.sign(end.y - center.y);

    let x = Math.round((length / hypotenuse * xLength) * xDirection + center.x);
    let y = Math.round((length / hypotenuse * yLength) * yDirection + center.y);

    return {x, y};
  }

  const order: Flavor[] = [
    "sour",
    "spicy",
    "dry",
    "sweet",
    "bitter",
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
        <canvas ref={canvas} width="200" height="200"/>
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

const GridItem = styled.div<{row: string, column: string, align?: string, justify?: string}>`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  align-self: ${props => props.align};
  justify-self: ${props => props.justify};
`;

function calculatePentagonPoints(size: number) {
  let points: Point[] = [];

  const stepSize = 2 * Math.PI / 5;
  const offset = Math.PI / 180 * -18;

  for (let i = 0; i < 5; i++) {
    const angle = i * stepSize + offset;
    points.push({
      x: center.x + size * Math.cos(angle),
      y: center.y + size * Math.sin(angle)
    });
  }

  return points;
}

export default BerryFlavorGraph;
