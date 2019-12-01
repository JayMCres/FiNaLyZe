import React from "react";
import { Table } from "semantic-ui-react";

const ISItem = props => {
  return (
    <Table.Row>
      <Table.Cell style={{ color: "blue" }}>
        <strong>{props.label}</strong>
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrOne.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrTwo.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrThree.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrFour.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrFive.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
    </Table.Row>
  );
};

export default ISItem;
