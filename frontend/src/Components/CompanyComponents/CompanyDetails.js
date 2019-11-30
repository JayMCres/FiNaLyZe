import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import DetailsMenu from "./DetailsMenu";
import DetailsProfile from "./DetailsProfile";

export default class CompanyDetails extends Component {
  render() {
    return (
      <Segment inverted>
        <DetailsProfile />
        <DetailsMenu />
      </Segment>
    );
  }
}
