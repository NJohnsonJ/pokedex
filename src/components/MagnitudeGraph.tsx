
import React, {useEffect, useMemo, useRef} from "react";

interface Props {
  number: number; // The number of points
  values: number[];
  max: number; // The highest magnitude
  size?: number; // The size of the graph
}

interface Point {
  x: number;
  y: number;
}

const center: Point = {
  x: 100,
  y: 100
}

const MagnitudeGraph: React.FC<Props> = ({number, values, max, size=100}) => {

  const points = useMemo(() => calculatePoints(size, number), []);

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
        const point = calculatePoint(values[index], max, center, points[index]);
        ctx.lineTo(point.x, point.y);
      }

      ctx.fillStyle = "rgb(0,155,155)";
      ctx.fill();
      ctx.strokeStyle = "#000";
      ctx.stroke();
    }
  }, [values, points])

  if (!canvas)
    return null;

  // const labelStyles = [];
  // for (let i = 0; i < number; i++) {
  //   const point = calculatePoint(size + size/5, size, center, points[i]);
  //   labelStyles.push({
  //     top: 
  //   })
  // }

  return (
    <canvas ref={canvas} width="200" height="200"/>
  )
}


function calculatePoints(size: number, number: number) {
  let points: Point[] = [];

  const stepSize = 2 * Math.PI / number;

  let offset = - Math.PI / 2; // Rotate the object so the first point is straight up

  for (let i = 0; i < number; i++) {
    const angle = i * stepSize + offset;
    points.push({
      x: center.x + size * Math.cos(angle),
      y: center.y + size * Math.sin(angle)
    });
  }

  return points;
}

function calculatePoint(value: number, max: number, center: Point, end: Point): Point {
  const xLength = Math.abs(end.x - center.x);
  const yLength = Math.abs(end.y - center.y);
  const hypotenuse = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
  const length = hypotenuse * (value / max) || max / 5; // Assign a minimum value so that 0 appears just off the origin

  let xDirection = Math.sign(end.x - center.x);
  let yDirection = Math.sign(end.y - center.y);

  let x = Math.round((length / hypotenuse * xLength) * xDirection + center.x);
  let y = Math.round((length / hypotenuse * yLength) * yDirection + center.y);

  return { x, y };
}

export default MagnitudeGraph;
