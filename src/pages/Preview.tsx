import React from "react";
import {Grid} from "@material-ui/core";
import BerryPreview from "../components/BerryPreview"
import ResourcePreview from "../components/ResourcePreview";
import PokemonPreview from "../components/PokemonPreview"

const Preview: React.FC = () => {
  return (
      <Grid container justify="center" alignContent="center" direction="row" lg={"auto"}>
        <ResourcePreview title={"Berries"} route={"/berry"}>
          <BerryPreview />
        </ResourcePreview>
        <ResourcePreview title={"Pokemon"} route={"/pokemon"}>
          <PokemonPreview />
        </ResourcePreview>
      </Grid>
  )
}

export default Preview;
