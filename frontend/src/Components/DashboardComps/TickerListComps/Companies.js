import React, { Component } from "react";

import { Button, Card, Image, Segment } from "semantic-ui-react";
import CompanyCard from "./CompanyCard";
// import CompanyHeader from "./CompanyHeader";

export default class Companies extends Component {
  render() {
    // console.log("Company list Props", this.props);

    return (
      <Segment inverted>
        <Card.Group>
          {this.props.companies.map((ticker, index) => {
            return (
              <CompanyCard
                num={index}
                key={ticker.id}
                {...ticker}
                handleClickedTicker={this.props.handleClickedTicker}
                handleValueMetricPost={this.props.handleValueMetricPost}
                handleProfilePost={this.props.handleProfilePost}
                addToWatchList={this.props.addToWatchList}
              />
            );
          })}
        </Card.Group>
      </Segment>
    );
  }
}
