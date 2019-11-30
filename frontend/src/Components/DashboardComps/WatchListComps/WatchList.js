import React, { Component } from "react";
// import { Segment } from "semantic-ui-react";

import FoundNotes from "./WatchItemComps/FoundNotes";

export default class WatchList extends Component {
  renderWatchList = () => {
    if (this.props.watchlist === undefined) {
      return "NO WATCH LIST";
    } else {
      return (
        <div>
          {this.props.watchlist.map(item => {
            // console.log(item);
            return (
              <FoundNotes
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
