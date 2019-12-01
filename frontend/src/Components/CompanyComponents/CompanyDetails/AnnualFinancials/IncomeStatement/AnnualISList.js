import React, { Component } from "react";
import { Segment, Table, Message } from "semantic-ui-react";
import AnnualHeader from "../AnnualHeader";
import AnnualISItem from "./AnnualISItem";

export default class AnnualISList extends Component {
  render() {
    console.log("AnnualISList Props", this.props);
    return (
      <Segment inverted>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">
                <Message color="violet"> Annual Income Statement </Message>
              </Table.HeaderCell>
            </Table.Row>
            <AnnualHeader />
          </Table.Header>
          <Table.Body>
            {this.props.annualISData.map((isItem, index) => {
              return <AnnualISItem key={index} {...isItem} />;
            })}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
