import React, { Component } from "react";
import { Table, Segment } from "semantic-ui-react";
import Ticker from "./Ticker";
// import TickerListHeader from "./TickerListHeader";

export default class ShortFormTickerList extends Component {
  render() {
    // console.log("ShortFormTickerList", this.props);
    return (
      <Table striped inverted>
        {/* <TickerListHeader /> */}
        <Table.Body>
          {this.props.companies.map((company, index) => {
            return (
              <Ticker
                key={company.ticker}
                {...company}
                num={index}
                handleClickedCompanyPost={this.props.handleClickedCompanyPost}
                handleCompanyFinancials={this.props.handleCompanyFinancials}
                handleRatioPost={this.props.handleRatioPost}
                showFinancialSummaryPage={this.props.showFinancialSummaryPage}
              />
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
