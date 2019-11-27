import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CompanyProfile from "./CompanyProfile";
import CompanyCharts from "./CompanyCharts";
import CompanyFinancial from "./CompanyFinancial";
import CompanyRatio from "./CompanyRatio";
export default class CompanyContainer extends Component {
  render() {
    const companyProfile = this.props.clickedCompanyData[0];
    const companyProfileArray = [companyProfile];
    // console.log("Clicked Company Profile", companyProfileArray);
    return (
      <div>
        <Segment attached="top" inverted>
          {companyProfileArray.map(item => {
            return <CompanyProfile {...item} />;
          })}
        </Segment>
        <Segment attached="middle" inverted>
          <Segment inverted>
            <CompanyCharts />
          </Segment>
          <Segment inverted>
            <CompanyFinancial />
          </Segment>
        </Segment>
        <Segment attached="bottom" inverted>
          <CompanyRatio />
        </Segment>
      </div>
    );
  }
}
