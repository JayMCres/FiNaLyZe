import React, { Component } from "react";
import { Button, Message, Segment } from "semantic-ui-react";

class SideCardButton extends Component {
  handleFetchAllCompanyDetails = async () => {
    await this.props.fetchAnnualIS();
    await this.props.displayCompanyDetailPage();
  };
  // console.log(" SideCardHeader Props", props);
  render() {
    return (
      <Button onClick={() => this.props.displayCompanyDetailPage()}>
        Company Page
      </Button>
    );
  }
}
export default SideCardButton;
