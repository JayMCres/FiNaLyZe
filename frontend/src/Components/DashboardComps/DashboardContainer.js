import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import DashboardList from "./TickerListComps/DashboardList";
import SideCardContainer from "./SideCardContainer";

export default class DashboardContainer extends Component {
  state = {
    valuationMetrics: [],
    post: "",
    response: ""
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

  render() {
    // console.log("dashboard Props", this.state);
    return (
      <Segment inverted>
        <Grid columns={2} divided>
          <Grid.Column width={10}>
            <Segment inverted style={{ overflow: "auto", maxHeight: 950 }}>
              <DashboardList
                companies={this.props.companies}
                handleClickedTicker={this.props.handleClickedTicker}
                handleValueMetricPost={this.handleValueMetricPost}
              />
              ;
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment inverted>
              <SideCardContainer
                valuationMetrics={this.state.valuationMetrics}
              />
            </Segment>
            <Segment
              // attached="bottom"
              inverted
              style={{ overflow: "auto", maxHeight: 950 }}
            >
              test
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
