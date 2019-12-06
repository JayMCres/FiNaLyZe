import React from "react";

import { Table } from "semantic-ui-react";

const SummaryItem = props => {
  console.log("summary props", props);
  return (
    <div>
      {/* <Table.Row> */}
      {/* {props[0].map(item => {
            return ( */}
      {/* <Table.Row style={{ color: "blue" }} textAlign="center"> */}
      <Table.Cell>{props.date}</Table.Cell>
      {/* </Table.Row> */}
      {/* );
          })} */}
      {/* {props.YrTwo.map(item => {
          return (
            <Table.Row style={{ color: "blue" }} textAlign="center">
              <Table.Cell>{item}</Table.Cell>
            </Table.Row>
          );
        })}
        {props.YrThree.map(item => {
          return (
            <Table.Row style={{ color: "blue" }} textAlign="center">
              <Table.Cell>{item}</Table.Cell>
            </Table.Row>
          );
        })}
        {props.YrFour.map(item => {
          return (
            <Table.Row style={{ color: "blue" }} textAlign="center">
              <Table.Cell>{item}</Table.Cell>
            </Table.Row>
          );
        })}
        {props.YrFive.map(item => {
          return (
            <Table.Row style={{ color: "blue" }} textAlign="center">
              <Table.Cell>{item}</Table.Cell>
            </Table.Row>
          );
        })} */}
      {/* </Table.Row> */}
    </div>
  );
};

export default SummaryItem;
