import React from "react";
import { Table } from "semantic-ui-react";

const AnnualBSItem = props => {
  return (
    <Table.Row>
      <Table.Cell style={{ color: "blue" }}>
        <strong>{props.label}</strong>
      </Table.Cell>
      {props.YrOne ? (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          {props.YrOne.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
      ) : (
        <Table.Cell textAlign="center" style={{ color: "black" }}>
          N/A
        </Table.Cell>
      )}
      {props.YrTwo ? (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          {props.YrTwo.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
      ) : (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          N/A
        </Table.Cell>
      )}
      {props.YrThree ? (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          {props.YrThree.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
      ) : (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          N/A
        </Table.Cell>
      )}
      {props.YrFour ? (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          {props.YrFour.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
      ) : (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          N/A
        </Table.Cell>
      )}
      {props.YrFive ? (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          {props.YrFive.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
      ) : (
        <Table.Cell textAlign="center" style={{ color: "blue" }}>
          N/A
        </Table.Cell>
      )}
    </Table.Row>
  );
};

export default AnnualBSItem;
