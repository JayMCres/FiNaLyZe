import React, { Component } from "react";
import { Card, Statistic, Icon, Message } from "semantic-ui-react";

export default class RealTimePriceCard extends Component {
  state = {
    currentStockPrices: [],
    priorStockPrices: []
  };

  componentDidMount() {
    this.timer = setInterval(() => this.setStockPrice(), 5000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  setStockPrice = () => {
    this.setState({
      currentStockPrices: this.props.stockPrices,
      priorStockPrices: this.state.currentStockPrices
    });
  };

  handleColorChange = () => {
    if (this.state.currentStockPrices > this.state.priorStockPrices) {
      return "#7FFF00";
    } else if (this.state.currentStockPrices < this.state.priorStockPrices) {
      return "#FF4500";
    } else {
      return "grey";
    }
  };

  render() {
    // console.log("Price Card Props", this.props);
    return (
      <Card>
        <Statistic size="tiny">
          <Statistic.Label textAlign="center">
            <h3>{this.props.symbol}</h3>
          </Statistic.Label>
          <Statistic.Value textAlign="center">
            <strong style={{ color: this.handleColorChange() }}>
              ${this.props.price}
            </strong>
          </Statistic.Value>
        </Statistic>
      </Card>
    );
  }
}
