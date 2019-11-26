import React, { Component } from "react";

import { Table } from "semantic-ui-react";
// import Ticker from "./Ticker";
import CompanyHeader from "./CompanyHeader";

export default class CompanyList extends Component {
  render() {
    // console.log("Company list", this.props);

    return (
      <div>
        <Table striped inverted>
          <Table.Header>
            <CompanyHeader />
          </Table.Header>
          <Table.Body>test</Table.Body>
        </Table>
      </div>
    );
  }
}
