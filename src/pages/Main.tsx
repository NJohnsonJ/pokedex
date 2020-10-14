import React from "react";
import {Switch} from "react-router-dom";
import Preview from "./Preview";

const Main: React.FC<never> = () => {

  return (
      <Switch>
        <Preview />
      </Switch>
  )
}

export default Main;
