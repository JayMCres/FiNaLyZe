import React, { Component } from "react";
import { Menu, Segment, Message, Grid } from "semantic-ui-react";
import DashboardContainer from "../DashboardComps/DashboardContainer";
import MarketAnalysisContainer from "./MarketComps/MarketAnalysisContainer";
import NewsContainer from "./NewsComponents/NewsContainer";
import CompaniesContainer from "./CompanyListComp/CompaniesContainer";
import RealTimeTickerContainer from "./PriceScrollBar/RealTimeTickerContainer";

class HomePage extends Component {
  state = {
    companies: [],
    newsFeed: false,
    dashBoard: true,
    CompanyList: false,
    clickedTicker: null,
    response: "",
    post: ""
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

  handleClickedTicker = itemId => {
    const clickedTicker = this.state.companies.find(item => item.id === itemId);
    // console.log("clicked Company", clickedCompany);
    this.setState({
      clickedTicker: clickedTicker
    });
  };

  toggleMainMenu = word => {
    if (word === "news") {
      return this.setState({
        newsFeed: true,
        dashBoard: false,
        CompanyList: false
      });
    }
    if (word === "company") {
      return this.setState({
        newsFeed: false,
        CompanyList: true,
        dashBoard: false
      });
    } else {
      return this.setState({
        newsFeed: false,
        CompanyList: false,
        dashBoard: true
      });
    }
  };

  render() {
    // console.log("Homepage State", this.state);
    return (
      <Segment inverted>
        <Segment inverted>
          <Message info></Message>
        </Segment>
        <Segment inverted>
          <MarketAnalysisContainer />
        </Segment>

        <Menu>
          <Menu.Item
            style={{ color: "blue" }}
            name="ticker"
            onClick={() => this.toggleMainMenu()}
          >
            <strong> Dashboard </strong>
          </Menu.Item>
          <Menu.Item
            style={{ color: "blue" }}
            name="company"
            onClick={() => this.toggleMainMenu("company")}
          >
            <strong> Company Analysis </strong>
          </Menu.Item>
          <Menu.Item
            style={{ color: "blue" }}
            name="news"
            onClick={() => this.toggleMainMenu("news")}
          >
            <strong> News Feed </strong>
          </Menu.Item>
        </Menu>

        <Segment inverted>
          <Grid columns={2} divided>
            <Grid.Column width={14}>
              {this.state.dashBoard ? (
                <DashboardContainer
                  clickedTicker={this.state.clickedTicker}
                  handleClickedTicker={this.handleClickedTicker}
                  companies={this.state.companies}
                />
              ) : null}
              {this.state.CompanyList ? (
                <CompaniesContainer companies={this.state.companies} />
              ) : null}
              {this.state.newsFeed ? <NewsContainer /> : null}
            </Grid.Column>
            <Grid.Column width={2}>
              <Message attached="top" color="violet">
                <h3>Stocks</h3>
              </Message>
              <Segment
                attached="bottom"
                inverted
                style={{ overflow: "auto", maxHeight: 950 }}
              >
                <RealTimeTickerContainer />
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    );
  }
}

export default HomePage;
