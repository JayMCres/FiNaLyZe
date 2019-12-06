import React, { Component } from "react";
// import Linkify from "react-linkify";

import { Button, Card } from "semantic-ui-react";

export default class CompanyCard extends Component {
  dashboardInfoHandler = async () => {
    await this.props.handleClickedTicker(this.props.id);
    await this.props.handleValueMetricPost();
    await this.props.handleProfilePost();
  };

  render() {
    // console.log("Company Card Props", this.props);
    return (
      <Card style={{ "background-color": "E6E6FA" }}>
        <Card.Content style={{ "background-color": "E6E6FA" }}>
          {/* <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/steve.jpg"
          /> */}
          <Card.Header style={{ "background-color": "E6E6FA" }}>
            <h4>{this.props.name}</h4>
          </Card.Header>
          <Card.Meta style={{ "background-color": "E6E6FA" }}>
            <strong>{this.props.ticker}</strong>
          </Card.Meta>
          {/* <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description> */}
        </Card.Content>

        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              basic
              color="violet"
              onClick={() => this.props.addToWatchList(this.props.id)}
            >
              Add to Watchlist
            </Button>
            <Button
              basic
              color="blue"
              onClick={() => this.dashboardInfoHandler()}
            >
              View Details
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
