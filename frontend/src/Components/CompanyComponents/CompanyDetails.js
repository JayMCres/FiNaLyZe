import React, { Component } from "react";
import { Segment, Image } from "semantic-ui-react";
import DetailsMenu from "./DetailsMenu";
import DetailsProfile from "./CompanyDetails/CompanyProfile/DetailsProfile";

export default class CompanyDetails extends Component {
  handleDetailsMenuRender = () => {
    if (
      this.props.summaryFinancials.length === 0 ||
      this.props.annualISData.length === 0 ||
      this.props.annualCFData.length === 0 ||
      this.props.annualBSData.length === 0
    ) {
      return (
        <Segment loading>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
      );
    } else {
      return (
        <DetailsMenu
          summaryFinancials={this.props.summaryFinancials}
          annualISData={this.props.annualISData}
          annualBSData={this.props.annualBSData}
          annualCFData={this.props.annualCFData}
        />
      );
    }
  };

  render() {
    // console.log("Company Details Props", this.props);
    return (
      <Segment inverted>
        <DetailsProfile
          clickedTicker={this.props.clickedTicker}
          companyProfile={this.props.companyProfile}
        />
        {this.handleDetailsMenuRender()}
      </Segment>
    );
  }
}
