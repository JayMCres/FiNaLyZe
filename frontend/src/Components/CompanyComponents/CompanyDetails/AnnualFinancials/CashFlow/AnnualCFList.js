import React, { Component } from "react";
import { Segment, Table, Message } from "semantic-ui-react";
import AnnualHeader from "../AnnualHeader";
import AnnualCFItem from "./AnnualCFItem";

export default class AnnualCFList extends Component {
  render() {
    return (
      <Segment inverted>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">
                <Message color="violet"> Annual Cashflow Statement </Message>
              </Table.HeaderCell>
            </Table.Row>
            <AnnualHeader />
          </Table.Header>
          <Table.Body>
            {this.props.annualCFData.map((isItem, index) => {
              return <AnnualCFItem key={index} {...isItem} />;
            })}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
