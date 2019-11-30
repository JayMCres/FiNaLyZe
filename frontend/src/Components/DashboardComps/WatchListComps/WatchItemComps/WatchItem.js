import React, { Component } from "react";
import {
  Header,
  Button,
  Segment,
  Message,
  Icon,
  Label
} from "semantic-ui-react";

import Notes from "./Notes";

export default class WatchItem extends Component {
  state = {
    currentNotes: [],
    WatchListNote: null
  };

  render() {
    // console.log("watch item Container State", this.props);
    const foundNotes = this.props.notes.filter(note => {
      return note.favTicker === this.props.ticker;
    });
    // console.log("found notes", foundNotes);
    return (
      <Segment inverted>
        <Label as="a" corner="right" color="red">
          <Icon
            name="remove"
            onClick={() => this.props.removeFromWatchList(this.props.id)}
          />
        </Label>
        <Message color="blue" attached="top">
          <Header as="h4">
            <Icon
              name="folder open"
              size="mini"
              onClick={() => this.props.togglePopup(this.props.id)}
            />
            {this.props.name}
            {/* <Button floated="right" icon="sticky note" /> */}
          </Header>
        </Message>
        {/* <Segment */}
        {foundNotes.length === 0 ? (
          <Message> No Notes </Message>
        ) : (
          <Message
            attached="bottom"
            inverted
            style={{ overflow: "auto", maxHeight: 100 }}
          >
            <Notes notes={foundNotes} />
          </Message>
        )}
      </Segment>
    );
  }
}
