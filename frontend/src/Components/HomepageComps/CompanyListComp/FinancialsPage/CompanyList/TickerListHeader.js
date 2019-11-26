import React, { Component } from "react";
import { Table, Message } from "semantic-ui-react";

export default class TickerListHeader extends Component {
  render() {
    return (
      <Table.Header>
        <Table.Row textAlign="center">
          <Table.HeaderCell>
            <Message color="black" style={{ color: "#8A2BE2" }}>
              #
            </Message>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Message color="black" style={{ color: "#8A2BE2" }}>
              Index
            </Message>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Message color="black" style={{ color: "#8A2BE2" }}>
              Ticker
            </Message>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }
}
