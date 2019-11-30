import React, { Component } from "react";
import { List, Message } from "semantic-ui-react";

import WatchList from "./WatchList";

export default class WatchListContainer extends Component {
  renderWatchList = () => {
    if (this.props.watchlist === undefined) {
      return "NO WATCH LIST";
    } else {
      return (
        <WatchList
          watchlist={[this.props.watchlist]}
          togglePopup={this.props.togglePopup}
        />
      );
    }
  };

  render() {
    // console.log("WATCH", this.props.watchlist.length);
    return <div>{this.renderWatchList()}</div>;
    // return <WatchList />;
  }
}
