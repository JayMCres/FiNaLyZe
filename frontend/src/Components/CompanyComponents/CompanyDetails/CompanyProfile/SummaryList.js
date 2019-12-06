import React, { Component } from "react";
import { Segment, Table, Message } from "semantic-ui-react";
// import FinancialSummary from "./FinancialSummary";
// import SummaryItem from "./SummaryItem";
import FinancialSummary from "./FinancialSummary";

class SummaryList extends Component {
  render() {
    console.log("Summary List", this.props);

    return (
      <Segment inverted>
        <FinancialSummary fins={this.props.summaryFinancials} />
      </Segment>
    );
  }
}

export default SummaryList;
