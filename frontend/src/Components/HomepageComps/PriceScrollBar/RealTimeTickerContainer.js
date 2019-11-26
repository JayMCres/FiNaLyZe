import React, { Component } from "react";
import io from "socket.io-client";
import { Card } from "semantic-ui-react";
import RealTimePriceCard from "./RealTimePriceCard";

export default class RealTimeTickerContainer extends Component {
  state = {
    stockPrices: [],
    endpoint: "http://localhost:5000"
  };

  componentWillMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("connect", this.connect);
    this.socket.on("disconnect", this.disconnect);
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("FromAPI", data =>
      this.setState({
        stockPrices: data
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

  render() {
    // console.log("Real Time Container state", this.state);
    return (
      <Card.Group>
        {this.state.stockPrices.map(price => {
          return <RealTimePriceCard key={price.symbol} {...price} />;
        })}
      </Card.Group>
    );
  }
}
