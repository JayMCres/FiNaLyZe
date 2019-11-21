import React, { Component } from "react";
import { Card, Statistic } from "semantic-ui-react";

export default class RealTimePriceCard extends Component {
  render() {
    // console.log("Price Card Props", this.props);
    return (
      <Card>
        <Statistic size="tiny">
          <Statistic.Label>
            <h3>{this.props.symbol}</h3>
          </Statistic.Label>
          <Statistic.Value color="violet">
            <h4>${this.props.price}</h4>
          </Statistic.Value>
        </Statistic>
      </Card>
    );
  }
}
