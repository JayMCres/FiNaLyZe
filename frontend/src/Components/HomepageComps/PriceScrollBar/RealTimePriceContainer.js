import React, { Component } from "react";
import { Segment, Card, Button, Message } from "semantic-ui-react";
import io from "socket.io-client";
import RealTimePriceCard from "./RealTimePriceCard";

export default class RealTimePriceContainer extends Component {
  state = {
    currentStockPrices: [],
    priorStockPrices: [],
    endpoint: "http://localhost:5000",
    startIdx: 0,
    endIdx: 5
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 5,
        endIdx: prevState.endIdx + 5
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 5,
        endIdx: prevState.endIdx - 5
      };
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
    // console.log("Real Time Price Container State", this.state);
    const realTimePriceItems = Object.values(
      this.state.currentStockPrices
    ).slice(this.state.startIdx, this.state.endIdx);
    return (
      <Segment inverted>
        <Button
          floated="left"
          onClick={() => this.showLess()}
          content="Back"
          icon="left arrow"
          labelPosition="left"
          disabled={this.state.startIdx === 0}
        />
        <Button
          floated="right"
          onClick={() => this.showMore()}
          content="Next"
          icon="right arrow"
          labelPosition="right"
          disabled={
            this.state.endIdx === this.state.currentStockPrices.length + 1
          }
        />
        <Card.Group centered itemsPerRow={5}>
          {realTimePriceItems.map(price => {
            return (
              <RealTimePriceCard
                key={price.symbol}
                {...price}
                handleColorChange={this.handleColorChange}
              />
            );
          })}
        </Card.Group>
      </Segment>
    );
  }
}
