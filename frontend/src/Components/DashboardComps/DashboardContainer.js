import React, { Component } from "react";
import {
  Segment,
  Grid,
  Message,
  Divider,
  Header,
  Icon
} from "semantic-ui-react";
import Companies from "./TickerListComps/Companies";
import SideCardContainer from "./SideCardContainer";
import WatchListContainer from "./WatchListComps/WatchList";

import CompanyDetails from "../CompanyComponents/CompanyDetails";

export default class DashboardContainer extends Component {
  state = {
    valuationMetrics: [],
    companyProfile: [],
    post: "",
    response: "",
    companyDetailsPage: null,
    notes: []
  };

  handleValueMetricPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/valuation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      valuationMetrics: body
    });
  };

  handleProfilePost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      companyProfile: body
    });
  };

  displayCompanyDetailPage = () => {
    this.setState({ companyDetailsPage: !this.state.companyDetailsPage });
  };

  render() {
    console.log("dashboard Props", this.props);
    return (
      <div>
        {!this.state.companyDetailsPage ? (
          <Segment inverted>
            <Grid columns={2} divided>
              <Grid.Column width={10}>
                <Segment inverted style={{ overflow: "auto", maxHeight: 950 }}>
                  <Companies
                    companies={this.props.companies}
                    handleClickedTicker={this.props.handleClickedTicker}
                    handleValueMetricPost={this.handleValueMetricPost}
                    handleProfilePost={this.handleProfilePost}
                    addToWatchList={this.props.addToWatchList}
                  />
                  ;
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment inverted>
                  <SideCardContainer
                    valuationMetrics={this.state.valuationMetrics}
                    companyProfile={this.state.companyProfile}
                    displayCompanyDetailPage={this.displayCompanyDetailPage}
                  />
                </Segment>
                {/* <Message> */}
                <Divider horizontal>
                  <Header as="h4" style={{ color: "blue" }}>
                    <Icon name="bar chart" />
                    Your Company Watchlist
                  </Header>
                </Divider>
                {/* </Message> */}
                <Segment
                  // attached="bottom"
                  inverted
                  style={{ overflow: "auto", maxHeight: 950 }}
                >
                  <WatchListContainer
                    watchlist={this.props.watchlist}
                    notes={this.state.notes}
                  />
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        ) : (
          <CompanyDetails />
        )}
      </div>
    );
  }
}
