import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Segment, Message, Grid } from "semantic-ui-react";
import DashboardContainer from "../DashboardComps/DashboardContainer";
import MarketAnalysisContainer from "./MarketComps/MarketAnalysisContainer";
import NewsContainer from "./NewsComponents/NewsContainer";
import CompaniesContainer from "./CompanyListComp/CompaniesContainer";
import RealTimeTickerContainer from "./PriceScrollBar/RealTimeTickerContainer";
import HomePageMenu from "./HomePageMenu";
class HomePage extends Component {
  state = {
    companies: [],
    clickedTicker: null,
    response: "",
    post: "",
    watchList: [],
    favorites: [],
    activeItem: "dashboard"
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
    const setWatchList = async () => {
      this.setState({ watchList: this.props.currentUser.favorites });
    };

    setWatchList();
  }

  handleClickedTicker = itemId => {
    const clickedTicker = this.state.companies.find(item => item.id === itemId);
    // console.log("clicked Company", clickedCompany);
    this.setState({
      clickedTicker: clickedTicker
    });
  };

  addToWatchList = itemId => {
    const userId = this.props.currentUser.id;
    const foundTicker = this.state.companies.find(item => item.id === itemId);

    // console.log("firing Wishlist", foundTicker);
    const preventDoubles = this.state.watchList.find(
      item => item.companyId === itemId
    );

    if (!preventDoubles) {
      fetch("http://localhost:5000/api/user_favorite/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          foundTicker,
          userId
        })
      })
        .then(response => response.json())
        .then(newFav => this.addNewItemToWatchList(newFav));
    }
  };

  addNewItemToWatchList = newFav => {
    this.setState({
      watchList: [...this.state.watchList, newFav]
    });
  };

  removeFromWatchList = favId => {
    const deleteFavorite = this.state.watchList.find(item => item.id === favId);
    // console.log("delete Favorite", deleteFavorite);
    const updateWatchList = this.state.watchList.filter(item => {
      return item.id !== favId;
    });
    if (deleteFavorite) {
      this.setState({
        watchList: updateWatchList
      });
    }

    fetch(`http://localhost:5000/api/delete_favorite/${favId}`, {
      method: "DELETE"
    });
  };

  handleMainMenuClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // console.log("Homepage State", this.state);
    const { activeItem } = this.state;

    const onMainMenuClick = link => {
      const HOME_PAGES = {
        dashboard: (
          <DashboardContainer
            currentUser={this.props.currentUser}
            clickedTicker={this.state.clickedTicker}
            handleClickedTicker={this.handleClickedTicker}
            companies={this.state.companies}
            addToWatchList={this.addToWatchList}
            watchlist={this.state.watchList}
            removeFromWatchList={this.removeFromWatchList}
          />
        ),
        company: <CompaniesContainer companies={this.state.companies} />,
        news: <NewsContainer />
      };
      return <div>{HOME_PAGES[link]}</div>;
    };

    return (
      <Segment inverted>
        <Message info></Message>

        <Segment inverted>
          <MarketAnalysisContainer />
        </Segment>
        <HomePageMenu
          handleMainMenuClick={this.handleMainMenuClick}
          activeItem={activeItem}
        />

        <Segment inverted>
          <Grid columns={2} divided>
            <Grid.Column width={14}>{onMainMenuClick(activeItem)}</Grid.Column>
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
