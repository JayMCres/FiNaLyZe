import React, { Component } from "react";
import { List } from "semantic-ui-react";

export default class Note extends Component {
  handleNoteClickRender = async () => {
    await this.props.renderClickedNote(this.props.id);
    await this.props.listTickerNotes();
  };

  render() {
    console.log("note props", this.props);
    return (
      <List.Item onClick={() => this.handleNoteClickRender()}>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">{this.props.title}</List.Header>
          <List.Description as="a">{this.props.createdAt}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}
