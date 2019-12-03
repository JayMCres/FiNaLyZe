import React, { Component } from "react";
import { Menu, Segment, Message } from "semantic-ui-react";

import SummaryList from "./CompanyDetails/CompanyProfile/SummaryList";
import ModelPage from "./CompanyDetails/ValuationModel/ModelPage";

import AnnualISList from "./CompanyDetails/AnnualFinancials/IncomeStatement/AnnualISList";
import AnnualBSList from "./CompanyDetails/AnnualFinancials/BalanceSheet/AnnualBSList";
import AnnualCFList from "./CompanyDetails/AnnualFinancials/CashFlow/AnnualCFList";

import QuaterlyISList from "./CompanyDetails/QuaterlyFinancials/IncomeStatement/QuaterlyISList";
import QuaterlyBSList from "./CompanyDetails/QuaterlyFinancials/BalanceSheet/QuaterlyBSList";
import QuaterlyCFList from "./CompanyDetails/QuaterlyFinancials/CashFlow/QuaterlyCFList";

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
    }
    if (this.state.activeItem === "model") {
      return this.renderModelPage();
    } else {
      return this.renderSummaryComp();
    }
  };

  renderModelPage = () => {
    return <ModelPage historicals={[this.props.historicals]} />;
  };

  renderSummaryComp = () => {
    return <SummaryList summaryFinancials={this.props.summaryFinancials} />;
  };

  renderAnnualISComp = () => {
    return <AnnualISList annualISData={this.props.annualISData} />;
  };

  renderAnnualBSComp = () => {
    return <AnnualBSList annualBSData={this.props.annualBSData} />;
  };

  renderAnnualCFComp = () => {
    return <AnnualCFList annualCFData={this.props.annualCFData} />;
  };

  renderQuaterlyISComp = () => {
    if (this.props.quaterlyISData.length === 0) {
      return (
        <Segment>
          <Message>Not Avaliable</Message>
        </Segment>
      );
    } else {
      return (
        <QuaterlyISList
          values={this.props.quaterlyISData.filter((item, index) => {
            return index > 30;
          })}
          labels={Object.keys(this.props.quaterlyISData[0])}
        />
      );
    }
  };

  renderQuaterlyBSComp = () => {
    if (this.props.quaterlyBSData.length === 0) {
      return (
        <Segment>
          <Message>Not Avaliable</Message>
        </Segment>
      );
    } else {
      return (
        <QuaterlyBSList
          values={this.props.quaterlyBSData.filter((item, index) => {
            return index > 30;
          })}
          labels={Object.keys(this.props.quaterlyBSData[0])}
        />
      );
    }
  };

  renderQuaterlyCFComp = () => {
    if (this.props.quaterlyCFData.length === 0) {
      return (
        <Segment>
          <Message>Not Avaliable</Message>
        </Segment>
      );
    } else {
      return (
        <QuaterlyCFList
          values={this.props.quaterlyCFData.filter((item, index) => {
            return index > 30;
          })}
          labels={Object.keys(this.props.quaterlyCFData[0])}
        />
      );
    }
  };

  render() {
    // const { activeItem } = this.state;
    // console.log("Menu Props", this.props);
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
