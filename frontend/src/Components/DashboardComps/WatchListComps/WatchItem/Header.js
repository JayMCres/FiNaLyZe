import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";

const WatchHeader = () => {
  return (
    <Segment>
      <Header as="h2">
        <Image circular src="/images/avatar/large/patrick.png" /> Patrick
      </Header>
    </Segment>
  );
};

export default WatchHeader;
