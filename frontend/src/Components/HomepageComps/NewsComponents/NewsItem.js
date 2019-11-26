import React, { Component } from "react";

import {
  Image,
  Button,
  Table,
  Segment,
  Grid,
  List,
  Message
} from "semantic-ui-react";

import Linkify from "react-linkify";

class NewsItem extends Component {
  render() {
    console.log("news Props", this.props);
    return <div>Test</div>;
  }
}

export default NewsItem;
