import React, { Component } from "react";
import { List, Button, Header, Icon, Image, Modal } from "semantic-ui-react";

export default class Note extends Component {
  // handleNoteClickRender = async () => {
  //   await this.props.renderClickedNote(this.props.id);
  //   await this.renderNoteItem();
  // };

  render() {
    console.log("note props", this.props);
    return (
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
              <List.Description as="a">{this.props.createdAt}</List.Description>
            </List.Content>
          </List.Item>
        }
      >
        <Modal.Header>{this.props.clickedNote.title}</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <p>{this.props.clickedNote.content}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted>
            <Icon name="remove" /> Delete Note
          </Button>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Edit Note
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
