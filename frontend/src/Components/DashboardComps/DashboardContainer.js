import React, { Component } from "react";
import {
  Segment,
  Grid,
  Message,
  Divider,
  Header,
  Icon
} from "semantic-ui-react";
import Companies from "./TickerListComps/Companies";
import SideCardContainer from "./WatchListComps/SideCardComps/SideCardContainer";
import WatchListContainer from "./WatchListComps/WatchList";
import NotePopUp from "./WatchListComps/NoteComps/NotePopUp";

import CompanyDetails from "../CompanyComponents/CompanyDetails";

export default class DashboardContainer extends Component {
  state = {
    valuationMetrics: [],
    companyProfile: [],
    post: "",
    response: "",
    companyDetailsPage: null,
    notes: [],
    showPopup: false,
    clickedFavorite: null
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/notes")
      .then(response => {
        return response.json();
      })
      .then(notes => {
        const userNotes = notes.filter(note => {
          return note.userId === this.props.currentUser.id;
        });
        return this.setState({ notes: userNotes });
      });
  }

  handleValueMetricPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/valuation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      valuationMetrics: body
    });
  };

  handleProfilePost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      companyProfile: body
    });
  };

  displayCompanyDetailPage = () => {
    this.setState({ companyDetailsPage: !this.state.companyDetailsPage });
  };

  togglePopup = itemId => {
    const clickedFavorite = this.props.watchlist.find(
      item => item.id === itemId
    );
    // console.log("showing Favorite", clickedFavorite);
    this.setState({
      showPopup: !this.state.showPopup,
      clickedFavorite: clickedFavorite
    });
  };

  addNewNoteToNotes = newNote => {
    this.setState({
      notes: [...this.state.notes, newNote]
    });
  };
  render() {
    // console.log("dashboard Props", this.state);
    return (
      <div>
        {!this.state.companyDetailsPage ? (
          <Segment inverted>
            <Grid columns={2} divided>
              <Grid.Column width={10}>
                <Segment inverted style={{ overflow: "auto", maxHeight: 950 }}>
                  <Companies
                    companies={this.props.companies}
                    handleClickedTicker={this.props.handleClickedTicker}
                    handleValueMetricPost={this.handleValueMetricPost}
                    handleProfilePost={this.handleProfilePost}
                    addToWatchList={this.props.addToWatchList}
                  />
                  ;
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment inverted>
                  <SideCardContainer
                    valuationMetrics={this.state.valuationMetrics}
                    companyProfile={this.state.companyProfile}
                    displayCompanyDetailPage={this.displayCompanyDetailPage}
                  />
                </Segment>
                {/* <Message> */}
                <Divider horizontal>
                  <Header as="h4" style={{ color: "blue" }}>
                    <Icon name="bar chart" />
                    Your Company Watchlist
                  </Header>
                </Divider>
                {/* </Message> */}
                <Segment
                  // attached="bottom"
                  inverted
                  style={{ overflow: "auto", maxHeight: 950 }}
                >
                  <WatchListContainer
                    watchlist={this.props.watchlist}
                    notes={this.state.notes}
                    togglePopup={this.togglePopup}
                  />
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        ) : (
          <CompanyDetails />
        )}
        {this.state.showPopup ? (
          <NotePopUp
            text="Close Me"
            user={this.props.currentUser}
            closePopup={this.togglePopup}
            clickedFavorite={this.state.clickedFavorite}
            addNewNoteToNotes={this.addNewNoteToNotes}
          />
        ) : null}
      </div>
    );
  }
}
