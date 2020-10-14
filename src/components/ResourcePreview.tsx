import React from "react";
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
      <Card onClick={navigate}>
        <CardHeader title={props.title}/>
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
  );
}

export default ResourcePreview;
