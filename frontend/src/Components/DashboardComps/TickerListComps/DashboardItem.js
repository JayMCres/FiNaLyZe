import React, { Component } from "react";

import { Table, Message, Button } from "semantic-ui-react";

export default class DashboardItem extends Component {
  dashboardInfoHandler = async () => {
    await this.props.handleClickedTicker(this.props.id);
    await this.props.handleValueMetricPost();
  };

  render() {
    // console.log("Dashboard item ", this.props);
    return (
      <Table.Row>
        <Table.Cell
          textAlign="center"
          onClick={() => this.dashboardInfoHandler()}
        >
          {this.props.num + 1}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.dashboardInfoHandler()}
        >
          <Message color="blue">
            <h4>{this.props.name}</h4>
          </Message>
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.dashboardInfoHandler()}
        >
          {this.props.ticker}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.dashboardInfoHandler()}
        >
          {this.props.exchange}
        </Table.Cell>
        <Table.Cell>
          <Button>WatchList</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
