import React, { Component } from "react";

import WatchItem from "./WatchItemComps/WatchItem";

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
              <WatchItem
                {...item}
                notes={this.props.notes}
                togglePopup={this.props.togglePopup}
                removeFromWatchList={this.props.removeFromWatchList}
                removeNoteFromNotes={this.props.removeNoteFromNotes}
                displayNoteUpdate={this.props.displayNoteUpdate}
                renderClickedNote={this.props.renderClickedNote}
                clickedNote={this.props.clickedNote}
              />
            );
          })}
        </div>
      );
      // this.props.handleNoteFetch();
    }
  };

  render() {
    // console.log("WATCH", this.props.watchlist.length);
    return <div>{this.renderWatchList()}</div>;
    // return <WatchList />;
  }
}
