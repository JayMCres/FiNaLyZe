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
    endIdx: 6
  };

  componentWillMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("connect", this.connect);
    this.socket.on("disconnect", this.disconnect);
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("FromAPI", data =>
      this.setState({
        currentStockPrices: data,
        priorStockPrices: this.state.currentStockPrices
      })
    );
  }

  connect = () => {
    // alert("Connected:" + this.socket.id);
    this.setState({ state: "connected" });
  };

  disconnect = () => {
    // alert("disconnected:" + this.socket.id);
    this.setState({ state: "disconnected" });
  };

  showMore = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx + 3,
        endIdx: prevState.endIdx + 3
      };
    });
  };

  showLess = () => {
    this.setState(prevState => {
      return {
        startIdx: prevState.startIdx - 3,
        endIdx: prevState.endIdx - 3
      };
    });
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
        />
        <Button
          floated="right"
          onClick={() => this.showMore()}
          content="Next"
          icon="right arrow"
          labelPosition="right"
        />
        <Card.Group centered itemsPerRow={7}>
          {realTimePriceItems.map(price => {
            return <RealTimePriceCard {...price} />;
          })}
        </Card.Group>
      </Segment>
    );
  }
}
