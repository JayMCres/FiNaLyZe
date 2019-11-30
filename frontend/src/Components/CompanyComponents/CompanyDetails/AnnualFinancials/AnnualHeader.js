import React from "react";

import { Table } from "semantic-ui-react";

const AnnualHeader = () => {
  return (
    <Table.Row>
      <Table.HeaderCell colSpan="1">Item</Table.HeaderCell>
      <Table.HeaderCell colSpan="1" textAlign="center">
        2014
      </Table.HeaderCell>
      <Table.HeaderCell colSpan="1" textAlign="center">
        2015
      </Table.HeaderCell>
      <Table.HeaderCell colSpan="1" textAlign="center">
        2016
      </Table.HeaderCell>
      <Table.HeaderCell colSpan="1" textAlign="center">
        2017
      </Table.HeaderCell>
      <Table.HeaderCell colSpan="1" textAlign="center">
        2018
      </Table.HeaderCell>
    </Table.Row>
  );
};

export default AnnualHeader;
