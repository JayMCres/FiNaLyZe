import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class RealTimePriceCard extends Component {
  render() {
    // console.log("Price Card Props", this.props);
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <h3>${this.props.price}</h3>
          </Card.Header>
          <Card.Meta>
            <h4>{this.props.symbol}</h4>
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}
