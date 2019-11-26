import React, { Component } from "react";

import { Table, Segment } from "semantic-ui-react";
import Company from "./Company";
import CompanyHeader from "./CompanyHeader";

export default class CompanyList extends Component {
  state = {
    companies: []
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/tickers")
      .then(response => {
        return response.json();
      })
      .then(companies => {
        return this.setState({
          companies: companies
        });
      });
  }
  render() {
    console.log("Company list State", this.state);

    return (
      // <div>
      <Segment inverted style={{ overflow: "auto", maxHeight: 950 }}>
        <Table striped inverted>
          <Table.Header>
            <CompanyHeader />
          </Table.Header>

          <Table.Body>
            {this.state.companies.map((ticker, index) => {
              return <Company num={index} key={ticker.id} {...ticker} />;
            })}
          </Table.Body>
        </Table>
      </Segment>
      // </div>
    );
  }
}
