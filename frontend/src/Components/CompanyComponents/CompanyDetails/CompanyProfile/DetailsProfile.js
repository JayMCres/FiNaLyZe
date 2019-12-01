import React, { Component } from "react";
import { Segment, Button, Grid, Summary, Message } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";
import CompanyOverview from "./CompanyOverview";

export default class DetailsProfile extends Component {
  renderCompanyCard = () => {
    if (this.props.companyProfile[0].length === 0) {
      return "Company Profile Unavaliable";
    } else {
      return (
        <Grid columns={2} divided>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={4}>
              {this.props.companyProfile.map(item => {
                return <ProfileCard key={item.companyName} {...item} />;
              })}
            </Grid.Column>

            <Grid.Column width={10}>
              <Segment inverted>
                {this.props.companyProfile.map(item => {
                  return <CompanyOverview key={item.companyName} {...item} />;
                })}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  };
  render() {
    console.log(" Details Profile Props", this.props);
    return (
      <div>
        <Segment inverted>
          <Button onClick={this.props.closeDetails}>close me</Button>
          <br />
          <br />
        </Segment>
        <Segment inverted attached>
          <Message color="blue">
            <h1>
              {this.props.clickedTicker.name}-{this.props.clickedTicker.ticker}
            </h1>
          </Message>
        </Segment>
        <Segment inverted>{this.renderCompanyCard()}</Segment>
      </div>
    );
  }
}
