import React, { Component } from "react";
import { Button, Icon, Table, Modal } from "semantic-ui-react";

// import "../../App.css";
// import { relative } from "path";

class CompanyNote extends Component {
  state = { open: false };

  handleCompanyNoteUpdate = async () => {
    await this.handleClick();
    await this.props.displayNoteUpdate();
  };

  handleClick = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });
  render() {
    // console.log("Company Note", this.props);
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
            onClick={() => this.props.removeNoteFromNotes(this.props.id)}
          />
        </Table.Cell>
        <Table.Cell>{this.props.title}</Table.Cell>
        <Table.Cell textAlign="center">{this.props.createdAt}</Table.Cell>

        <Table.Cell textAlign="center">
          <Modal
            basic
            // open={open}
            // onOpen={this.open}
            // onClose={this.close}
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
            {/* <Modal.Actions>
              <Button onClick={() => this.handleCompanyNoteUpdate()} primary>
                Edit <Icon name="right chevron" />
              </Button>
            </Modal.Actions> */}
          </Modal>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CompanyNote;
