import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import Search from "./LandingPage/Search";
import CompanyList from "./LandingPage/CompanyList";
import FinancialsSummaryContainer from "./FinancialsPage/FinancialsSummaryContainer";

export default class CompaniesContainer extends Component {
  state = {
    inputValue: "",
    companies: [],
    companyFinancialSummary: false,
    clickedCompany: null,
    response: "",
    post: "",
    clickedCompanyData: []
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

  handleCompanyFinancials = itemId => {
    const clickedCompany = this.state.companies.find(
      item => item.id === itemId
    );
    // console.log("clicked Company", clickedCompany);
    this.setState({
      clickedCompany: clickedCompany,
      companyFinancialSummary: false
    });
  };

  handleClickedCompanyPost = async () => {
    const response = await fetch("http://localhost:5000/api/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedCompany.ticker })
    });
    const body = await response.json();
    this.setState({
      clickedCompanyData: [...body]
    });
  };
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
    console.log("Companies Container State", this.state);
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
              handleClickedCompanyPost={this.handleClickedCompanyPost}
              handleCompanyFinancials={this.handleCompanyFinancials}
            />
          </Segment>
        ) : (
          <Segment inverted>
            <FinancialsSummaryContainer
              companies={this.state.companies}
              clickedCompanyData={this.state.clickedCompanyData}
            />
          </Segment>
        )}
      </div>
    );
  }
}
