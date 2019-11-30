import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CompanyDetails from "./CompanyDetails";

export default class DetailsContainer extends Component {
  render() {
    return (
      <Segment inverted>
        <CompanyDetails />
      </Segment>
    );
  }
}
