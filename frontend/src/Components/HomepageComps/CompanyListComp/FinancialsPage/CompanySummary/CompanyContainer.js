import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CompanyCharts from "./CompanyCharts";
import CompanyFinancial from "./CompanyFinancial";
import CompanyRatio from "./CompanyRatio";
export default class CompanyContainer extends Component {
  render() {
    return (
      <div>
        <Segment attached="top" inverted>
          Test
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
