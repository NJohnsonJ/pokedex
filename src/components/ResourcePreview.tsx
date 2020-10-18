import React from "react";
import styled from "styled-components";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {useHistory} from "react-router";

interface PreviewProps {
  title: string;
  route: string;
}

const ResourcePreview: React.FC<PreviewProps> = (props) => {

  const history = useHistory();

  function navigate() {
    history.push(props.route)
  }

  return (
    <Container>
      <Card onClick={navigate}>
        <CardHeader title={props.title} />
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  margin: 1em;
  max-width: 400px;
`;

export default ResourcePreview;
