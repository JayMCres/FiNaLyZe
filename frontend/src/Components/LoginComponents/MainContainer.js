import React, { Component } from "react";
import { Segment, Grid, Button, Header } from "semantic-ui-react";
import HomePage from "../HomepageComps/HomePage";

export default class MainContianer extends Component {
  render() {
    return <HomePage currentUser={this.props.currentUser} />;
  }
}
