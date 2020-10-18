import React from "react";
import Badge from "../Badge";

interface Props {
  flavor: Flavor;
}

export type Flavor = "sweet"|"bitter"|"dry"|"sour"|"spicy";

const FlavorBadge: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({flavor}) => {

  const colorMap = {
    sweet: "pink",
    bitter: "green",
    dry: "blue",
    sour: "yellow",
    spicy: "red"
  }

  return (
      <Badge color={colorMap[flavor]}>
        {flavor}
      </Badge>
  )
}

export default FlavorBadge;
