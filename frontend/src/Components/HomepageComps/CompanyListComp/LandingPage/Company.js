import React, { Component } from "react";

import { Message, Table } from "semantic-ui-react";

export default class Company extends Component {
  render() {
    // console.log("Company Props", this.props);
    return (
      <Table.Row>
        <Table.Cell textAlign="center">{this.props.num + 1}</Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.props.showFinancialSummaryPage()}
        >
          <Message color="blue">
            <h3>{this.props.name}</h3>
          </Message>
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.props.showFinancialSummaryPage()}
        >
          {this.props.ticker}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.props.showFinancialSummaryPage()}
        >
          {this.props.exchange}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.props.showFinancialSummaryPage()}
        >
          {this.props.sector}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.props.showFinancialSummaryPage()}
        >
          {this.props.industry}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.props.showFinancialSummaryPage()}
        >
          {this.props.website}
        </Table.Cell>
      </Table.Row>
    );
  }
}
