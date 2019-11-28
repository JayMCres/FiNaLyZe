import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import CompanySideCard from "./WatchListComps/CompanySideCard";

export default class SideCardContainer extends Component {
  render() {
    console.log("Sidecard Props", this.props.valuationMetrics.length);
    if (this.props.valuationMetrics.length === 0) {
      return <div>CLICK COMPANY</div>;
    } else {
      return (
        <Segment inverted>
          {[this.props.valuationMetrics].map(metric => {
            return <CompanySideCard {...metric} />;
          })}
        </Segment>
      );
    }
  }
}
