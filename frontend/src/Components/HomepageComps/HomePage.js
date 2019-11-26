import React, { Component } from "react";
import { Menu, Segment, Message, Grid } from "semantic-ui-react";
import CompanyAnalysis from "./CompanyAnalysis";
import MarketAnalysisContainer from "./MarketComps/MarketAnalysisContainer";
import NewsContainer from "./NewsComponents/NewsContainer";
import CompanyList from "./CompanyListComp/CompanyList";
import RealTimeTickerContainer from "./PriceScrollBar/RealTimeTickerContainer";
import Search from "./Search";
class HomePage extends Component {
  state = {
    newsFeed: false,
    companyAnalysis: false,
    // marketIndexes: false,
    CompanyList: true,
    inputValue: "",
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

  toggleMainMenu = word => {
    if (word === "news") {
      return this.setState({
        newsFeed: true,
        companyAnalysis: false,
        // marketIndexes: false,
        CompanyList: false
      });
    }
    if (word === "company") {
      return this.setState({
        newsFeed: false,
        companyAnalysis: true,
        // marketIndexes: false,
        CompanyList: false
      });
      // }
      // if (word === "market") {
      //   return this.setState({
      //     newsFeed: false,
      //     companyAnalysis: false,
      //     marketIndexes: true,
      //     CompanyList: false
      //   });
    } else {
      return this.setState({
        newsFeed: false,
        companyAnalysis: false,
        // marketIndexes: false,
        CompanyList: true
      });
    }
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

  render() {
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
            <strong> Companies/Tickers </strong>
          </Menu.Item>
          <Menu.Item
            style={{ color: "blue" }}
            name="company"
            onClick={() => this.toggleMainMenu("company")}
          >
            <strong> Company Analysis </strong>
          </Menu.Item>
          {/* <Menu.Item
            style={{ color: "blue" }}
            name="market"
            onClick={() => this.toggleMainMenu("market")}
          >
            <strong> Market Analysis </strong>
          </Menu.Item> */}
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
              <Search
                handleChange={this.handleChange}
                inputValue={this.state.inputValue}
              />
              {this.state.CompanyList ? (
                <CompanyList companies={this.filterCompanies()} />
              ) : null}
              {this.state.newsFeed ? <NewsContainer /> : null}
              {this.state.companyAnalysis ? <CompanyAnalysis /> : null}
            </Grid.Column>
            <Grid.Column width={2}>
              <Message attached="top" color="violet">
                <h3>Stocks</h3>
              </Message>
              <Segment
                attached="bottom"
                inverted
                style={{ overflow: "auto", maxHeight: 900 }}
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
