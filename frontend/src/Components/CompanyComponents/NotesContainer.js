import React, { Component } from "react";
import { Segment, Message } from "semantic-ui-react";
import NotesList from "./NotesList";

export default class NotesContainer extends Component {
  render() {
    console.log("Notes container State", this.props);
    return (
      <Segment inverted>
        {this.props.notes.length === 0 ? (
          <Message>No Notes for Current Company</Message>
        ) : (
          <NotesList
            notes={this.props.notes}
            removeNoteFromNotes={this.props.removeNoteFromNotes}
            displayNoteUpdate={this.props.displayNoteUpdate}
          />
        )}
      </Segment>
    );
  }
}
