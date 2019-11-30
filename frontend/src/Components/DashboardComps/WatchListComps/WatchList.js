import React, { Component } from "react";
// import { Segment } from "semantic-ui-react";

import WatchItem from "./WatchItem/Container";

export default class WatchList extends Component {
  renderWatchList = () => {
    if (this.props.watchlist === undefined) {
      return "NO WATCH LIST";
    } else {
      return (
        <div>
          {this.props.watchlist.map(item => {
            console.log(item);
            return (
              <WatchItem
                {...item}
                notes={this.props.notes}
                togglePopup={this.props.togglePopup}
              />
            );
          })}
        </div>
      );
    }
  };

  render() {
    // console.log("WATCH", this.props.watchlist.length);
    return <div>{this.renderWatchList()}</div>;
    // return <WatchList />;
  }
}
