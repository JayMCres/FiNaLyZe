import React, { Component } from "react";
import { Card, Statistic } from "semantic-ui-react";

export default class MarketIndexCard extends Component {
  render() {
    // console.log("market index card", this.props);
    return (
      <Card inverted color="violet">
        {/* <Message color="violet"> */}
        <Statistic color="violet" size="tiny">
          <Statistic.Label textAlign="center">
            {this.props.indexName}
          </Statistic.Label>
          <Statistic.Value>
            <h3>{this.props.changes}</h3>
          </Statistic.Value>
        </Statistic>
        {/* </Message> */}
      </Card>
    );
  }
}
