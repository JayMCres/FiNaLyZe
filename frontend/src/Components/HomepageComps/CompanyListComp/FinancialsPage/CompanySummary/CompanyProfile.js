import React, { Component } from "react";
import { Menu, Message, Segment, Grid, Image } from "semantic-ui-react";
import Linkify from "react-linkify";

export default class CompanyProfile extends Component {
  render() {
    const marketCap = parseInt(this.props.MktCap) / 1000000;
    console.log("Company Profile Props", this.props);
    return (
      <div>
        <Segment inverted attached="top">
          <Grid columns={2} compact divided>
            <Grid.Row>
              <Grid.Column width={2}>
                <Image
                  circular
                  centered
                  bordered
                  // floated="left"
                  size="tiny"
                  src={this.props.image}
                  // // style={{ margin: "2em 2em 2em -4em" }}
                />
              </Grid.Column>
              <Grid.Column width={14}>
                <Segment inverted color="violet" attached="top">
                  <h2>{this.props.companyName}</h2>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Menu attached compact widths={2}>
          <Menu.Item as="a">
            <strong>
              Market Cap:{" "}
              {marketCap.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Menu.Item>
          <Menu.Item as="a">
            <strong>% Price Change: {this.props.ChangesPerc}</strong>
          </Menu.Item>
        </Menu>
        <Message attached content="Message" icon="help circle" info>
          {this.props.description}
        </Message>
        <Segment attached>
          <Linkify>{this.props.website}</Linkify>
        </Segment>
      </div>
    );
  }
}
