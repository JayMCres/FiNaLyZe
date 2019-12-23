import React, { Component } from "react";

import { Divider, Grid, Message, Table } from "semantic-ui-react";
import SummaryItem from "./SummaryItem";

export default class SummaryList extends Component {
  render() {
    console.log("Fin Summary List", this.props);

    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">
              Financial Summary
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Message>
            <Grid centered column={2}>
              <Table.Row>
                {this.props.labels.map(item => {
                  return (
                    <div>
                      <Message color="blue" style={{ color: "grey" }}>
                        <strong>{item}</strong>
                      </Message>
                      <Divider inverted />
                      <br />
                    </div>
                  );
                })}
              </Table.Row>
              {this.props.values.map((item, index) => {
                return <SummaryItem key={item.date} {...item} />;
              })}
            </Grid>
          </Message>
        </Table.Body>
      </Table>
    );
  }
}
