import React, { Component } from "react";
import { Card, Statistic } from "semantic-ui-react";

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
      currentStockPrices: this.props.price,
      priorStockPrices: this.state.currentStockPrices
    });
  };

  handleColorChange = () => {
    if (this.state.currentStockPrices > this.state.priorStockPrices) {
      return "#7FFF00";
    } else if (this.state.currentStockPrices < this.state.priorStockPrices) {
      return "red";
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
              <h3> ${this.props.price} </h3>
            </strong>
          </Statistic.Value>
        </Statistic>
      </Card>
    );
  }
}
