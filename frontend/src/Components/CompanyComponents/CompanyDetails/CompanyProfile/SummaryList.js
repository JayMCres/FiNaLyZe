import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import FinancialSummary from "./FinancialSummary";

class SummaryList extends Component {
  render() {
    console.log("Summary List", this.props);

    return (
      <Segment inverted>
        <FinancialSummary fins={this.props.summaryFinancials} />
        {/* {this.props.summaryFinancials.map((item, index) => {
          return (
            <FinancialSummary
              key={index}
              {...item}
              fins={this.props.summaryFinancials}
            />
          );
        })} */}
      </Segment>
    );
  }
}

export default SummaryList;
