import React, { Component } from "react";

import HomePage from "../HomepageComps/HomePage";

export default class MainContianer extends Component {
  render() {
    return <HomePage currentUser={this.props.currentUser} />;
  }
}
