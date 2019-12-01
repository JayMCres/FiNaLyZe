import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import CompanyDetails from "./CompanyDetails";

export default class DetailsContainer extends Component {
  state = {
    annualISData: [],
    annualBSData: [],
    annualCFData: [],
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

  fetchAllAnnualData = async () => {
    await this.fetchAnnualIS();
    await this.fetchAnnualCF();
    await this.fetchAnnualBS();
  };

  render() {
    console.log("Detial container Props", this.state);
    return (
      <Segment inverted>
        <CompanyDetails
          annualISData={this.state.annualISData}
          annualBSData={this.state.annualBSData}
          annualCFData={this.state.annualCFData}
          clickedTicker={this.props.clickedTicker}
        />
      </Segment>
    );
  }
}
