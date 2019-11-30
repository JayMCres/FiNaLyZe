import React, { Component } from "react";
import {
  Segment,
  Button,
  Message,
  Accordion,
  Icon,
  Table,
  TransitionablePortal,
  Header,
  Modal,
  Container
} from "semantic-ui-react";

import "../../App.css";
// import { relative } from "path";

class Note extends Component {
  state = { open: false };

  handleClick = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });
  render() {
    const { open } = this.state;
    // console.log("Note", this.props);
    return (
      <Table.Row>
        <Table.Cell textAlign="center">
          <Button
            compact
            basic
            circular
            size="tiny"
            color="red"
            icon={<Icon name="delete" />}
            onClick={() => this.props.removeNote(this.props.id)}
          />
        </Table.Cell>
        <Table.Cell>{this.props.title}</Table.Cell>
        <Table.Cell textAlign="center">{this.props.createdAt}</Table.Cell>

        <Table.Cell textAlign="center">
          <Modal
            basic
            trigger={
              <Button icon>
                <Icon name="eye" />
              </Button>
            }
          >
            <Modal.Header textAlign="center">{this.props.title}</Modal.Header>
            <Modal.Content textAlign="center" scrolling>
              {this.props.content}
            </Modal.Content>
            <Modal.Actions>
              <Button primary>
                Edit <Icon name="right chevron" />
              </Button>
            </Modal.Actions>
          </Modal>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Note;
