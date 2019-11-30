import React from "react";
import { Button, Message, Segment } from "semantic-ui-react";

const SideCardButton = props => {
  // console.log(" SideCardHeader Props", props);

  return (
    <Button onClick={() => props.displayCompanyDetailPage()}>
      Company Page
    </Button>
  );
};

export default SideCardButton;
