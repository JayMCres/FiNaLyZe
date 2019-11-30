import React, { Component } from "react";
import { Segment, Message, Icon } from "semantic-ui-react";
// import CompanySideCard from "./CompanySideCard";

import SideCardHeader from "./SideCardHeader";
import SideCardValues from "./SideCardValues";

export default class SideCardContainer extends Component {
  render() {
    // console.log("Sidecard Data", sidecardData);
    if (this.props.valuationMetrics.length === 0) {
      return (
        <Message icon>
          <Icon name="circle notched" loading />
          <Message.Content>
            <Message.Header>NO COMPANY SELECTED</Message.Header>
            Choose Company Please
          </Message.Content>
        </Message>
      );
    } else {
      return (
        <div>
          <Segment attached="top">
            {[this.props.companyProfile].map(item => {
              return <SideCardHeader {...item} />;
            })}
          </Segment>
          <Segment attached="top">
            {[this.props.valuationMetrics].map(item => {
              return (
                <SideCardValues
                  {...item}
                  displayCompanyDetailPage={this.props.displayCompanyDetailPage}
                />
              );
            })}
          </Segment>
        </div>
      );
    }
  }
}
