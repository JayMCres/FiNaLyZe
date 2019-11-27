import React, { Component } from "react";
import { Grid, Segment, Message } from "semantic-ui-react";
import ShortFormTickerList from "./CompanyList/ShortFormTickerList";
import CompanyContainer from "./CompanySummary/CompanyContainer";
export default class FinancialSummaryContainer extends Component {
  renderMainCompany = () => {
    if (this.props.clickedCompanyData.length === 0) {
      return <Message color="blue">Select Company</Message>;
    } else {
      return (
        <CompanyContainer
          clickedCompanyRatios={this.props.clickedCompanyRatios}
          clickedCompanyData={[this.props.clickedCompanyData].map(obj => {
            return {
              profile: obj[0],
              revenue: obj[1].filter(item => {
                return item.label === "Revenue";
              }),
              ebit: obj[1].filter(item => {
                return item.label === "Operating income";
              }),
              ebitda: obj[1].filter(item => {
                return item.label === "EBITDA";
              }),
              ni: obj[1].filter(item => {
                return item.label === "Net income";
              }),
              ocf: obj[2].filter(item => {
                return item.label === "Operating cash flow";
              }),
              capex: obj[2].filter(item => {
                return item.label === "Capital expenditure";
              }),
              fcf: obj[2].filter(item => {
                return item.label === "Free cash flow";
              })
            };
          })}
        />
      );
    }
  };
  render() {
    // console.log("Financial Summary Props", this.props);
    return (
      <Grid columns={2} textAlign="center">
        {/* <Divider vertical>Or</Divider> */}
        <Grid.Row>
          <Grid.Column width={6} color="black">
            <Segment inverted style={{ overflow: "auto", maxHeight: 950 }}>
              <ShortFormTickerList
                companies={this.props.companies}
                handleClickedCompanyPost={this.props.handleClickedCompanyPost}
                handleCompanyFinancials={this.props.handleCompanyFinancials}
                handleRatioPost={this.props.handleRatioPost}
                showFinancialSummaryPage={this.props.showFinancialSummaryPage}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={10} color="black">
            <Segment inverted>{this.renderMainCompany()}</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
