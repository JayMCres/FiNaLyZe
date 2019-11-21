import React, { Component } from "react";
import { Segment, Grid, Message } from "semantic-ui-react";
import io from "socket.io-client";
export default class MarketAnalysis extends Component {
  state = {
    currentStockPrices: [],
    priorStockPrices: [],
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

  render() {
    console.log("Market Analysis MainPage State", this.state);

    return <div>Market Analysis</div>;
  }
}
