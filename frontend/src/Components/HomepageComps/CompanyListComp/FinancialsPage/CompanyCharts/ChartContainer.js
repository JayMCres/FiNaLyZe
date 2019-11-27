import React, { Component } from "react";
import { Grid, Message } from "semantic-ui-react";

export default class ChartContainer extends Component {
  render() {
    return (
      <Grid columns="equal" textAlign="center">
        <Grid.Row>
          <Grid.Column>Test</Grid.Column>
          <Grid.Column>Test</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
