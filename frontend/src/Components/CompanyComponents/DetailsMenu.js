import React, { Component } from "react";
import { Menu, Table, Segment } from "semantic-ui-react";

import SummaryList from "./SummaryList";

import AnnualISList from "./CompanyDetails/AnnualFinancials/IncomeStatement/AnnualISList";
import AnnualBSList from "./CompanyDetails/AnnualFinancials/BalanceSheet/AnnualBSList";
import AnnualCFList from "./CompanyDetails/AnnualFinancials/CashFlow/AnnualCFList";

import QuaterlyISList from "./CompanyDetails/QuaterlyFinancials/QuaterlyISList";
import QuaterlyBSList from "./CompanyDetails/QuaterlyFinancials/QuaterlyBSList";
import QuaterlyCFList from "./CompanyDetails/QuaterlyFinancials/QuaterlyCFList";

export default class DetailsMenu extends Component {
  state = {
    activeItem: ""
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  menuToggleRenderHandler = () => {
    if (this.state.activeItem === "annualIS") {
      return this.renderAnnualISComp();
    }
    if (this.state.activeItem === "annualBS") {
      return this.renderAnnualBSComp();
    }
    if (this.state.activeItem === "annualCF") {
      return this.renderAnnualCFComp();
    }
    if (this.state.activeItem === "quaterlyIS") {
      return this.renderQuaterlyISComp();
    }
    if (this.state.activeItem === "quaterlyBS") {
      return this.renderQuaterlyBSComp();
    }
    if (this.state.activeItem === "quaterlyCF") {
      return this.renderQuaterlyCFComp();
    } else {
      return this.renderSummaryComp();
    }
    // if (this.state.activeItem === "model") {
    //   return this.renderModelPage();
    // }
  };

  renderSummaryComp = () => {
    return <SummaryList />;
  };

  renderAnnualISComp = () => {
    return <AnnualISList />;
  };

  renderAnnualBSComp = () => {
    return <AnnualBSList />;
  };

  renderAnnualCFComp = () => {
    return <AnnualCFList />;
  };

  renderQuaterlyISComp = () => {
    return <QuaterlyISList />;
  };

  renderQuaterlyBSComp = () => {
    return <QuaterlyBSList />;
  };

  renderQuaterlyCFComp = () => {
    return <QuaterlyCFList />;
  };

  render() {
    // const { activeItem } = this.state;
    // console.log("Active Item", activeItem);
    return (
      <Segment inverted>
        <Menu>
          <Menu.Item
            name="summary"
            active={this.state.activeItem === "summary"}
            onClick={this.handleItemClick}
          >
            <strong> Summary</strong>
          </Menu.Item>
          <Menu.Item
            name="annualIS"
            active={this.state.activeItem === "annualIS"}
            onClick={this.handleItemClick}
          >
            <strong> Income Statement (Annual)</strong>
          </Menu.Item>

          <Menu.Item
            name="annualBS"
            active={this.state.activeItem === "annualBS"}
            onClick={this.handleItemClick}
          >
            <strong> Balance Sheet (Annual)</strong>
          </Menu.Item>
          <Menu.Item
            inverted
            name="annualCF"
            active={this.state.activeItem === "annualCF"}
            onClick={this.handleItemClick}
          >
            <strong> Cashflow Statement (Annual)</strong>
          </Menu.Item>
          <Menu.Item
            name="quaterlyIS"
            active={this.state.activeItem === "quaterlyIS"}
            onClick={this.handleItemClick}
          >
            <strong>Income Statement (QTR)</strong>
          </Menu.Item>
          <Menu.Item
            name="quaterlyBS"
            active={this.state.activeItem === "quaterlyBS"}
            onClick={this.handleItemClick}
          >
            <strong> Balance Sheet (QTR) </strong>
          </Menu.Item>

          <Menu.Item
            name="quaterlyCF"
            active={this.state.activeItem === "cquaterlyCF"}
            onClick={this.handleItemClick}
          >
            <strong> Cashflow Statement (QTR) </strong>
          </Menu.Item>
          <Menu.Item
            name="model"
            active={this.state.activeItem === "model"}
            onClick={this.handleItemClick}
          >
            <strong> Financial Models </strong>
          </Menu.Item>
        </Menu>

        <Segment>{this.menuToggleRenderHandler()}</Segment>
      </Segment>
    );
  }
}
