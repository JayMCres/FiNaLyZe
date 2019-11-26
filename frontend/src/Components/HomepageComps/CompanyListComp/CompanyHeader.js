import React from "react";
import { Table } from "semantic-ui-react";

const CompanyHeader = props => {
  return (
    <Table.Row textAlign="center">
      <Table.HeaderCell>#</Table.HeaderCell>
      <Table.HeaderCell>Company</Table.HeaderCell>
      <Table.HeaderCell>Ticker</Table.HeaderCell>
      <Table.HeaderCell>Exchange</Table.HeaderCell>
      <Table.HeaderCell>Sector</Table.HeaderCell>
      <Table.HeaderCell>Website</Table.HeaderCell>
      <Table.HeaderCell>WatchList</Table.HeaderCell>
    </Table.Row>
  );
};

export default CompanyHeader;
