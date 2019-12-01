import React from "react";
import { Message, Table } from "semantic-ui-react";

const HistoricalsRow = props => {
  // console.log("Model Row", props);
  return (
    <div>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.Revenue}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.EBITDA}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.Margin}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.OCF}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.Conversion}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.FCF}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.capex}</strong>
        </Table.Row>
      </Message>
    </div>
  );
};

export default HistoricalsRow;
