import React from "react";
import {Grid} from "@material-ui/core";
import styled from "styled-components";

const Header: React.FC<never> = () => (
    <Container>
      <Grid container justify="center" direction="row">
        <h1>Pokédex</h1>
      </Grid>
    </Container>
);

const Container = styled.div`
  background: red;
  width: 100%;
  h1 {
    color: white;
    text-shadow: -1px 0 black, 1px 0 black, 0px -1px black, 0px 1px black;
  }
  box-shadow: 1em -1px 1em black;
  margin-bottom: 1em;
  border: 3px solid yellow;
  border-radius: 5px;
`;

export default Header;
