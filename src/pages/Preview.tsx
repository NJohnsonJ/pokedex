import React from "react";
import {Grid} from "@material-ui/core";
import BerryPreview from "../components/BerryPreview";
import ResourcePreview from "../components/ResourcePreview";

const Preview: React.FC = () => {
  return (
      <Grid container alignContent="center" direction="column" lg={"auto"}>
        <ResourcePreview title={"Berries"} route={"/berry"}>
          <BerryPreview />
        </ResourcePreview>
      </Grid>
  )
}

export default Preview;
