import React, { Component } from "react";

import { Message, Table } from "semantic-ui-react";

export default class Company extends Component {
  tickerClickHandler = async () => {
    await this.props.handleCompanyFinancials(this.props.id);
    await this.props.showFinancialSummaryPage();
    await this.props.handleClickedCompanyPost();
  };

  render() {
    // console.log("Company Props", this.props);
    return (
      <Table.Row>
        <Table.Cell textAlign="center">{this.props.num + 1}</Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          <Message color="blue">
            <h3>{this.props.name}</h3>
          </Message>
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.ticker}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.exchange}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.sector}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.industry}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.website}
        </Table.Cell>
      </Table.Row>
    );
  }
}
