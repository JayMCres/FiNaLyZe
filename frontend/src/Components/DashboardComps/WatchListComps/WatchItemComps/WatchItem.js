import React, { Component } from "react";
import { Header, Segment, Message, Icon, Label } from "semantic-ui-react";

import Notes from "./Notes";

export default class WatchItem extends Component {
  state = {
    currentNotes: [],
    WatchListNote: null
  };

  handleWatchListDelete = async () => {
    await this.props.removeNoteFromNotes(this.props.id);
    await this.props.removeFromWatchList(this.props.id);
  };

  render() {
    // console.log("watch item Container State", this.props);
    const foundNotes = this.props.notes.filter(note => {
      return note.favTicker === this.props.ticker;
    });
    // console.log("found notes", foundNotes);
    console.log("Watch Item Props", this.props);
    return (
      <Segment inverted>
        <Label as="a" corner="right" color="red">
          <Icon
            name="remove"
            onClick={() => this.handleWatchListDelete(this.props.id)}
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
            <Notes
              notes={foundNotes}
              removeNoteFromNotes={this.props.removeNoteFromNotes}
              handleNoteFetch={this.props.handleNoteFetch}
              displayNoteUpdate={this.props.displayNoteUpdate}
              renderClickedNote={this.props.renderClickedNote}
              clickedNote={this.props.clickedNote}
            />
          </Message>
        )}
      </Segment>
    );
  }
}
