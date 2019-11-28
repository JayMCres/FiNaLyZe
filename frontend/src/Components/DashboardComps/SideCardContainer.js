import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";

export default class SideCardContainer extends Component {
  render() {
    console.log("Sidecard Props", this.props);
    return <Segment inverted>Test</Segment>;
  }
}
