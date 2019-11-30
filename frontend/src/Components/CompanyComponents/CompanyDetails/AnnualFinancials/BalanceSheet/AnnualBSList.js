import React, { Component } from "react";
import { Segment, Table, Message } from "semantic-ui-react";
import AnnualHeader from "../AnnualHeader";

export default class AnnualBSList extends Component {
  render() {
    return (
      <Segment inverted>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">
                <Message color="violet"> Annual Balance Sheet </Message>
              </Table.HeaderCell>
            </Table.Row>
            <AnnualHeader />
          </Table.Header>
          <Table.Body>Test</Table.Body>
        </Table>
      </Segment>
    );
  }
}
