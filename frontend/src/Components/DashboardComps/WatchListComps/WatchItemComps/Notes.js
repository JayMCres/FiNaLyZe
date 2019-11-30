import React, { Component } from "react";
import { List, Modal, Message } from "semantic-ui-react";
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

  listTickerNotes = () => {
    return this.props.notes.map(note => {
      return (
        <Modal
          basic
          size="small"
          trigger={
            <Message info>
              <List.Item>
                <List.Content onClick={() => this.renderClickedNote(note.id)}>
                  <List.Header as="a">{note.title}</List.Header>
                </List.Content>
              </List.Item>
            </Message>
          }
        >
          <Modal.Header as="h2">{this.state.clickedNote.title}</Modal.Header>
          <Modal.Header as="h6">
            {this.state.clickedNote.createdAt}
          </Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <p>{this.state.clickedNote.content}</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      );
    });
  };

  render() {
    console.log("Notes State", this.state);
    return (
      <List divided relaxed>
        {this.props.notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              {...note}
              renderClickedNote={this.renderClickedNote}
              listTickerNotes={this.listTickerNotes}
            />
          );
        })}
      </List>
    );
  }
}
