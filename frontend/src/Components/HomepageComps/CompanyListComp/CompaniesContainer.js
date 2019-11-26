import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import Search from "./LandingPage/Search";
import CompanyList from "./LandingPage/CompanyList";

export default class CompaniesContainer extends Component {
  state = {
    inputValue: "",
    companies: [],
    companyFinancialSummary: false
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

  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterCompanies = () =>
    this.state.companies.filter(item => {
      return (
        item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
        item.ticker
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.exchange
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase())
      );
    });

  showFinancialSummaryPage = () => {
    // console.log("dhowing Details page");
    this.setState({
      companyFinancialSummary: !this.state.companyFinancialSummary
    });
  };

  render() {
    return (
      <div>
        {!this.state.companyFinancialSummary ? (
          <Segment inverted>
            <Search
              handleChange={this.handleChange}
              inputValue={this.state.inputValue}
            />
            <CompanyList
              showFinancialSummaryPage={this.showFinancialSummaryPage}
              companies={this.filterCompanies()}
            />
          </Segment>
        ) : (
          <div>test</div>
        )}
      </div>
    );
  }
}
