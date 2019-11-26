import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

export default class Ticker extends Component {
  render() {
    // console.log("Ticker", this.props);
    return (
      <Table.Row>
        <Table.Cell
          // onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "#7FFF00" }}
        >
          {this.props.num + 1}
        </Table.Cell>
        <Table.Cell
          // onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "#7FFF00" }}
        >
          {this.props.name}
        </Table.Cell>
        <Table.Cell
          // onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "#7FFF00" }}
        >
          {this.props.ticker}
        </Table.Cell>
      </Table.Row>
    );
  }
}
