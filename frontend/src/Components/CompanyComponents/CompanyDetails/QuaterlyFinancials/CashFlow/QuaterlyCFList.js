import React, { Component } from "react";

import { Divider, Grid, Message, Table } from "semantic-ui-react";
import QuaterlyCFItem from "./QuaterlyCFItem";

class QuaterlyCFList extends Component {
  renderValue = () => {
    return this.props.quaterlyCFData.map(item => {
      return <Grid.Column>{item}</Grid.Column>;
    });
  };
  render() {
    // const labelArray = this.props.labels[0];

    // console.log("CF list", this.props);

    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">
              Quaterly Cashflow Statement
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
                      <Message color="blue" style={{ color: "black" }}>
                        <strong>{item}</strong>
                      </Message>
                      <Divider inverted />
                      <br />
                    </div>
                  );
                })}
              </Table.Row>
              {this.props.values.map((item, index) => {
                return <QuaterlyCFItem key={index} {...item} />;
              })}
            </Grid>
          </Message>
        </Table.Body>
      </Table>
    );
  }
}

export default QuaterlyCFList;
