import React from "react";
import { Table } from "semantic-ui-react";

const CompanyhHeader = props => {
  return (
    <Table.Row textAlign="center">
      <Table.HeaderCell>#</Table.HeaderCell>
      <Table.HeaderCell>Company</Table.HeaderCell>
      <Table.HeaderCell>Ticker</Table.HeaderCell>
      <Table.HeaderCell>Exchange</Table.HeaderCell>
      <Table.HeaderCell>WatchList</Table.HeaderCell>
    </Table.Row>
  );
};

export default CompanyhHeader;
