import React, { Component } from "react";
import { Grid, Message } from "semantic-ui-react";
import RevenueChart from "./RevenueChart";
import EbitdaChart from "./EbitdaChart";

export default class ChartContainer extends Component {
  render() {
    // console.log("Chart Container Props", this.props);
    return (
      <Grid columns="equal" textAlign="center">
        <Grid.Row>
          <Grid.Column>
            {this.props.companyRevenueArray.map((item, index) => {
              return <RevenueChart key={index} {...item} />;
            })}
          </Grid.Column>
          <Grid.Column>
            {this.props.companyEbitdaArray.map((item, index) => {
              return <EbitdaChart key={index} {...item} />;
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
