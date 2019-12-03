import React, { Component } from "react";
import { List, Button, Icon, Modal } from "semantic-ui-react";
import UpdatePopUp from "./UpdatePopUp";

export default class Note extends Component {
  state = {
    showUpdatePopup: false
  };

  displayNoteUpdate = () => {
    return this.setState({
      showUpdatePopup: !this.state.showUpdatePopup
    });
  };
  render() {
    // console.log("note props", this.props);
    return (
      <div>
        {this.state.showUpdatePopup ? (
          <UpdatePopUp
            displayNoteUpdate={this.displayNoteUpdate}
            clickedNote={this.props.clickedNote}
            user={this.props.user}
            clickedFavorite={this.props.clickedFavorite}
          />
        ) : (
          <Modal
            basic
            trigger={
              <List.Item
                onClick={() => this.props.renderClickedNote(this.props.id)}
              >
                <List.Icon
                  name="file alternate"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="a">{this.props.title}</List.Header>
                  <List.Description>{this.props.createdAt}</List.Description>
                </List.Content>
              </List.Item>
            }
          >
            <Modal.Header>{this.props.clickedNote.title}</Modal.Header>
            <Modal.Content scrolling>
              {/* <Modal.Description> */}
              <p>{this.props.clickedNote.content}</p>
              {/* </Modal.Description> */}
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" inverted>
                <Icon
                  name="remove"
                  onClick={() => this.props.removeNoteFromNotes(this.props.id)}
                />{" "}
                Delete Note
              </Button>
              <Button
                color="green"
                onClick={() => this.displayNoteUpdate()}
                inverted
              >
                <Icon name="checkmark" /> Edit Note
              </Button>
            </Modal.Actions>
          </Modal>
        )}
      </div>
    );
  }
}
