import React, { Component } from "react";
import { List } from "semantic-ui-react";
import Note from "./Note";

export default class Notes extends Component {
  state = {
    watchNote: null,
    clickedNote: []
  };

  renderClickedNote = noteId => {
    const clickedNote = this.props.notes.find(note => {
      return note.id === noteId;
    });
    console.log("showing", clickedNote);
    return this.setState({
      clickedNote: clickedNote

      // watchNote: !this.state.watchNote
    });
  };

  render() {
    // console.log("Notes State", this.state);
    return (
      <List divided relaxed>
        {this.props.notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              {...note}
              renderClickedNote={this.renderClickedNote}
              clickedNote={this.state.clickedNote}
              removeNoteFromNotes={this.props.removeNoteFromNotes}
            />
          );
        })}
      </List>
    );
  }
}
