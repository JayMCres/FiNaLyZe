import React from "react";
import { Message, Header, Image } from "semantic-ui-react";

const SideCardHeader = props => {
  // console.log(" SideCardHeader Props", props);

  return (
    // <Segment inverted>
    <Message info>
      <Header as="h2">
        <Image circular src={props.image} /> {props.companyName}
      </Header>
    </Message>
    // </Segment>
  );
};

export default SideCardHeader;
