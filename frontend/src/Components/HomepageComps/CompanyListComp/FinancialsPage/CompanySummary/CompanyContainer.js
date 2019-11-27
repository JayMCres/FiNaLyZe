import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CompanyProfile from "./CompanyProfile";
import ChartContainer from "../CompanyCharts/ChartContainer";
import CompanyFinancial from "./CompanyFinancial";
import CompanyRatio from "./CompanyRatio";
export default class CompanyContainer extends Component {
  state = {
    chartToggle: true
  };

  handleChartToggle = () => {
    this.setState({
      chartToggle: !this.state.chartToggle
    });
  };

  render() {
    const companyProfile = this.props.clickedCompanyData[0];
    const companyProfileArray = [companyProfile];
    // console.log("Clicked Company Profile", companyProfileArray);
    return (
      <div>
        <Segment attached="top" inverted>
          {companyProfileArray.map(item => {
            return (
              <CompanyProfile
                // key={item.companyName}
                {...item}
                handleChartToggle={this.handleChartToggle}
              />
            );
          })}
        </Segment>
        <Segment attached="middle" inverted>
          <Segment inverted>
            {this.state.chartToggle ? (
              <Segment inverted>
                <ChartContainer />
              </Segment>
            ) : null}
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
