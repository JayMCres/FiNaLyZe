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

export default class DetailsPage extends Component {
  state = {
    activeItem: "summary"
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
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
    const onMenuClick = link => {
      const DETAIL_PAGES = {
        summary: this.renderSummaryComp(),
        annualIS: this.renderAnnualISComp(),
        annualBS: this.renderAnnualBSComp(),
        annualCF: this.renderAnnualCFComp(),
        quaterlyBS: this.renderQuaterlyBSComp(),
        quaterlyIS: this.renderQuaterlyISComp(),
        quaterlyCF: this.renderQuaterlyCFComp(),
        model: this.renderModelPage()
      };
      return <div>{DETAIL_PAGES[link]}</div>;
    };

    return (
      <Segment inverted>
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
        </Segment>

        <Segment inverted>{onMenuClick(this.state.activeItem)}</Segment>
      </Segment>
    );
  }
}
