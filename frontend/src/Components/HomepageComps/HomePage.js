import React, { Component } from "react";
import { Menu, Segment, Message } from "semantic-ui-react";
import CompanyAnalysis from "./CompanyAnalysis";
import MarketAnalysis from "./MarketComps/MarketAnalysis";
import NewsFeed from "./NewsFeed";
import TickerList from "./TickerList";
import RealTimePriceContainer from "./RealTimePriceContainer";
class HomePage extends Component {
  state = {
    newsFeed: false,
    companyAnalysis: false,
    marketIndexes: false,
    tickerList: true
  };

  toggleMainMenu = word => {
    if (word === "news") {
      return this.setState({
        newsFeed: true,
        companyAnalysis: false,
        marketIndexes: false,
        tickerList: false
      });
    }
    if (word === "company") {
      return this.setState({
        newsFeed: false,
        companyAnalysis: true,
        marketIndexes: false,
        tickerList: false
      });
    }
    if (word === "market") {
      return this.setState({
        newsFeed: false,
        companyAnalysis: false,
        marketIndexes: true,
        tickerList: false
      });
    } else {
      return this.setState({
        newsFeed: false,
        companyAnalysis: false,
        marketIndexes: false,
        tickerList: true
      });
    }
  };

  render() {
    return (
      <Segment inverted>
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
          <Menu.Item
            style={{ color: "blue" }}
            name="market"
            onClick={() => this.toggleMainMenu("market")}
          >
            <strong> Market Analysis </strong>
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
          <RealTimePriceContainer />
        </Segment>
        <Segment inverted>
          <Message info></Message>
        </Segment>
        <Segment inverted>
          {this.state.tickerList ? <TickerList /> : null}
          {this.state.newsFeed ? <NewsFeed /> : null}
          {this.state.companyAnalysis ? <CompanyAnalysis /> : null}
          {this.state.marketIndexes ? <MarketAnalysis /> : null}
        </Segment>
      </Segment>
    );
  }
}

export default HomePage;
