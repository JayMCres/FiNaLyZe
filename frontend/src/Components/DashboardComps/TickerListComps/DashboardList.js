import React, { Component } from "react";

import { Table, Segment } from "semantic-ui-react";
import ListHeader from "./ListHeader";
import DashboardItem from "./DashboardItem";

export default class DashboardList extends Component {
  render() {
    // console.log("Dashboard List Props", this.props);
    return (
      <div>
        <Table striped color="violet">
          <Table.Header>
            <ListHeader />
          </Table.Header>
          <Table.Body>
            {this.props.companies.map((company, index) => {
              return (
                <DashboardItem
                  num={index}
                  key={company.ticker}
                  {...company}
                  handleClickedTicker={this.props.handleClickedTicker}
                  handleValueMetricPost={this.props.handleValueMetricPost}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
