import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CompanyDetails from "./CompanyDetails";

export default class DetailsContainer extends Component {
  state = {
    annualISData: [],
    annualBSData: [],
    annualCFData: [],
    summaryFinancials: [],
    post: "",
    response: ""
  };

  componentDidMount() {
    return this.fetchAllAnnualData();
  }

  fetchAnnualIS = async () => {
    const response = await fetch("http://localhost:5000/api/annualincome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedTicker.ticker })
    });
    const body = await response.json();
    console.log(body);
    this.setState({
      annualISData: body[0]
    });
  };
  fetchAnnualCF = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/annualcf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      annualCFData: body[0]
    });
  };

  fetchAnnualBS = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/annualbs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      annualBSData: body[0]
    });
  };

  fetchSummaryFinancials = async () => {
    // e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/summaryfinancials",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ post: this.props.clickedTicker.ticker })
      }
    );
    const body = await response.json();
    // console.log(body);
    this.setState({
      summaryFinancials: body
    });
  };

  fetchAllAnnualData = async () => {
    await this.fetchSummaryFinancials();
    await this.fetchAnnualIS();
    await this.fetchAnnualCF();
    await this.fetchAnnualBS();
  };

  render() {
    console.log("Detial container State", this.state);
    return (
      <Segment inverted>
        <CompanyDetails
          summaryFinancials={this.state.summaryFinancials}
          annualISData={this.state.annualISData}
          annualBSData={this.state.annualBSData}
          annualCFData={this.state.annualCFData}
          clickedTicker={this.props.clickedTicker}
          companyProfile={this.props.companyProfile}
        />
      </Segment>
    );
  }
}
