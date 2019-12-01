import React, { Component } from "react";

import { Image, Card, Statistic } from "semantic-ui-react";

class ProfileCard extends Component {
  render() {
    // console.log("CompanyCars", this.props);
    return (
      <div>
        {/* <Segment attached="top"> */}
        <Card centered>
          <Image src={this.props.image} size="medium" circular />
          <Card.Content>
            <Card.Header>
              {/* <h1>{this.props.companyName}</h1> */}
              <Statistic horizontal color="green" size="mini">
                <Statistic.Value>PRICE:${this.props.Price}</Statistic.Value>
              </Statistic>
            </Card.Header>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
