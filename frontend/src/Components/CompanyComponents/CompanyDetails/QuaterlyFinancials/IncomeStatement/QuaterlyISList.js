import React, { Component } from "react";

import { Divider, Grid, Message, Table } from "semantic-ui-react";
import QuaterlyISItem from "./QuaterlyISItem";

class QuaterlyISList extends Component {
  render() {
    // console.log("income list", this.props);

    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">
              Quaterly Income Statement
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* <Segment tertiary> */}
        <Table.Body tertiary>
          <Message>
            <Grid centered column={2}>
              <Table.Row>
                {this.props.labels.map(item => {
                  return (
                    <div>
                      <Message style={{ color: "navy" }}>
                        <strong>{item}</strong>
                      </Message>

                      <Divider inverted />
                      <br />
                    </div>
                  );
                })}
              </Table.Row>

              {this.props.values.map((item, index) => {
                return <QuaterlyISItem key={index} {...item} />;
              })}
            </Grid>
          </Message>
        </Table.Body>
        {/* </Segment> */}
      </Table>
    );
  }
}

export default QuaterlyISList;
