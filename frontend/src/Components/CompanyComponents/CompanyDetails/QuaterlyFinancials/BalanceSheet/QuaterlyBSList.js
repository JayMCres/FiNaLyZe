import React, { Component } from "react";

import { Divider, Grid, Message, Segment, Table } from "semantic-ui-react";
import QuaterlyBSItem from "./QuaterlyBSItem";

class QuaterlyBSList extends Component {
  render() {
    console.log("Balance List", this.props);
    return (
      // <Segment compact>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">
              Quaterly Balance Sheet
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
                // const value = Object.values(item);
                return <QuaterlyBSItem key={index} {...item} />;
              })}
            </Grid>
          </Message>
        </Table.Body>
      </Table>
      // </Segment>
    );
  }
}

export default QuaterlyBSList;
