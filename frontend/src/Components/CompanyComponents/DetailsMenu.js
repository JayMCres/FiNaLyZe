import React, { Component } from "react";
import { Menu, Segment, Message } from "semantic-ui-react";

// import SummaryList from "./CompanyDetails/CompanyProfile/SummaryList";
// import ModelPage from "./CompanyDetails/ValuationModel/ModelPage";

// import AnnualISList from "./CompanyDetails/AnnualFinancials/IncomeStatement/AnnualISList";
// import AnnualBSList from "./CompanyDetails/AnnualFinancials/BalanceSheet/AnnualBSList";
// import AnnualCFList from "./CompanyDetails/AnnualFinancials/CashFlow/AnnualCFList";

// import QuaterlyISList from "./CompanyDetails/QuaterlyFinancials/IncomeStatement/QuaterlyISList";
// import QuaterlyBSList from "./CompanyDetails/QuaterlyFinancials/BalanceSheet/QuaterlyBSList";
// import QuaterlyCFList from "./CompanyDetails/QuaterlyFinancials/CashFlow/QuaterlyCFList";

export default class DetailsMenu extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu>
          <Menu.Item
            name="summary"
            active={this.props.activeItem === "summary"}
            onClick={this.props.handleItemClick}
          >
            <strong> Summary</strong>
          </Menu.Item>
          <Menu.Item
            name="annualIS"
            active={this.props.activeItem === "annualIS"}
            onClick={this.props.handleItemClick}
          >
            <strong> Income Statement (Annual)</strong>
          </Menu.Item>

          <Menu.Item
            name="annualBS"
            active={this.props.activeItem === "annualBS"}
            onClick={this.props.handleItemClick}
          >
            <strong> Balance Sheet (Annual)</strong>
          </Menu.Item>
          <Menu.Item
            inverted
            name="annualCF"
            active={this.props.activeItem === "annualCF"}
            onClick={this.props.handleItemClick}
          >
            <strong> Cashflow Statement (Annual)</strong>
          </Menu.Item>
          <Menu.Item
            name="quaterlyIS"
            active={this.props.activeItem === "quaterlyIS"}
            onClick={this.props.handleItemClick}
          >
            <strong>Income Statement (QTR)</strong>
          </Menu.Item>
          <Menu.Item
            name="quaterlyBS"
            active={this.props.activeItem === "quaterlyBS"}
            onClick={this.props.handleItemClick}
          >
            <strong> Balance Sheet (QTR) </strong>
          </Menu.Item>

          <Menu.Item
            name="quaterlyCF"
            active={this.props.activeItem === "cquaterlyCF"}
            onClick={this.props.handleItemClick}
          >
            <strong> Cashflow Statement (QTR) </strong>
          </Menu.Item>
          <Menu.Item
            name="model"
            active={this.props.activeItem === "model"}
            onClick={this.props.handleItemClick}
          >
            <strong> Financial Models </strong>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
