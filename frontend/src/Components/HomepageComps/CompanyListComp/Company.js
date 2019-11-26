import React, { Component } from "react";

import { Message, Table, Button } from "semantic-ui-react";

export default class Company extends Component {
  render() {
    console.log("Company Props", this.props);
    return (
      // <Segment compact>
      <Table.Row>
        <Table.Cell textAlign="center">{this.props.num + 1}</Table.Cell>
        <Table.Cell textAlign="center">
          <Message color="blue">
            <h3>{this.props.name}</h3>
          </Message>
        </Table.Cell>
        <Table.Cell textAlign="center">{this.props.ticker}</Table.Cell>
        <Table.Cell textAlign="center">{this.props.exchange}</Table.Cell>
        <Table.Cell textAlign="center">{this.props.sector}</Table.Cell>
        <Table.Cell textAlign="center">{this.props.website}</Table.Cell>

        <Table.Cell textAlign="center">
          <Button>WatchList</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
