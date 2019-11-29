import React, { Component } from "react";
import { Header, Image, Segment, Message, Icon } from "semantic-ui-react";

import WatchHeader from "./Header";
import Notes from "./Notes";

export default class Container extends Component {
  render() {
    console.log("watchitem", this.props, this.state);
    return (
      <Segment inverted>
        <Message color="blue" attached="top">
          <Header as="h4">
            <Icon name="file alternate" size="mini" />
            {this.props.name}
          </Header>
        </Message>
        {/* <Segment */}
        {this.props.notes.length === 0 ? (
          <Message> No Notes </Message>
        ) : (
          <Message
            attached="bottom"
            inverted
            style={{ overflow: "auto", maxHeight: 100 }}
          >
            <Notes />
          </Message>
        )}
      </Segment>
    );
  }
}
