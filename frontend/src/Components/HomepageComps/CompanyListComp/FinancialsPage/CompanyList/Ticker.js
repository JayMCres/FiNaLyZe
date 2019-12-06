import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class Ticker extends Component {
  compareClickHandler = async () => {
    await this.props.handleCompanyFinancials(this.props.id);
    await this.props.showFinancialSummaryPage();
    await this.props.handleClickedCompanyPost();
    await this.props.handleRatioPost();
  };

  render() {
    // console.log("Ticker", this.props);
    return (
      <Table.Row>
        <Table.Cell
          onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "#6600FA" }}
        >
          {this.props.num + 1}
        </Table.Cell>
        <Table.Cell
          onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "blue" }}
        >
          {this.props.name}
        </Table.Cell>
        <Table.Cell
          onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "blue" }}
        >
          {this.props.ticker}
        </Table.Cell>
      </Table.Row>
    );
  }
}
