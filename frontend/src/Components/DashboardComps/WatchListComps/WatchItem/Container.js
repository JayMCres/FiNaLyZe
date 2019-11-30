import React, { Component } from "react";
import { Header, Button, Segment, Message, Icon } from "semantic-ui-react";

import WatchHeader from "./Header";
import Notes from "./Notes";

export default class Container extends Component {
  render() {
    console.log("watchitem", this.props, this.state);
    return (
      <Segment inverted>
        <Message color="blue" attached="top">
          <Header as="h4">
            <Icon
              name="file alternate"
              size="mini"
              onClick={() => this.props.togglePopup(this.props.id)}
            />
            {this.props.name}
            {/* <Button floated="right" icon="sticky note" /> */}
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
            <Notes notes={this.props.notes} />
          </Message>
        )}
      </Segment>
    );
  }
}
