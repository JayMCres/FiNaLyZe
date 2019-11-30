import React, { Component } from "react";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table,
  Modal,
  List,
  Popup,
  Label,
  Button
} from "semantic-ui-react";
import WatchNote from "./WatchNote";

class NoteViewer extends Component {
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

  handleModelRender = () => {
    return this.setState({
      clickedNote: []
    });
  };

  listTickerNotes = () => {
    if (this.props.notes.length === 0) {
      return "Currently there are no notes for this company";
    } else {
      return this.props.notes.map(note => {
        return (
          <List horizontal size="mini" selection divided>
            <Modal
              basic
              size="small"
              trigger={
                <Message info>
                  <List.Item>
                    <List.Content
                      onClick={() => this.renderClickedNote(note.id)}
                    >
                      <List.Header as="a">{note.title}</List.Header>
                    </List.Content>
                  </List.Item>
                </Message>
              }
            >
              <Modal.Header as="h2">
                {this.state.clickedNote.title}
              </Modal.Header>
              <Modal.Header as="h6">
                {this.state.clickedNote.createdAt}
              </Modal.Header>
              <Modal.Content scrolling>
                <Modal.Description>
                  <p>{this.state.clickedNote.content}</p>
                </Modal.Description>
              </Modal.Content>
              {/* <Modal.Actions>
                <Button
                  // basic
                  color="red"
                  onClick={() =>
                    this.props.removeNote(this.state.clickedNote.id)
                  }
                  inverted
                >
                  <Icon name="remove" /> Delete Note
                </Button>
                <Button color="blue" inverted>
                  Next Note <Icon name="arrow alternate circle right" />
                </Button>
              </Modal.Actions> */}
            </Modal>
          </List>
        );
      });
    }
  };

  handleNoteClick = noteId => {
    this.renderClickedNote(noteId);
    this.viewTickerNote();
  };

  render() {
    // console.log("WatchListNote", this.props, this.state);
    return (
      <div>
        {this.listTickerNotes()}
        {this.state.watchNote ? (
          <WatchListNote clickedNote={this.state.clickedNote} />
        ) : null}
      </div>
      //   // <List divided relaxed>
      //   //   <List.Item>
      //   //     <List.Icon name="crosshairs" size="large" verticalAlign="middle" />
      //   //     <List.Content>
      //   //       <List.Header as="a">Firepower</List.Header>
      //   //     </List.Content>
      //   //   </List.Item>
      //   // </List>
    );
  }
}

export default NoteViewer;
