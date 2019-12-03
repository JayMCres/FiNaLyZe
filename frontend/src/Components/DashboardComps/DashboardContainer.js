import React, { Component } from "react";
import { Segment, Grid, Divider, Header, Icon, Label } from "semantic-ui-react";
import Companies from "./TickerListComps/Companies";
import SideCardContainer from "./WatchListComps/SideCardComps/SideCardContainer";
import WatchListContainer from "./WatchListComps/WatchList";
import NotePopUp from "./WatchListComps/NoteComps/NotePopUp";
import UpdatePopUp from "./WatchListComps/NoteComps/UpdatePopUp";
import DetailsContainer from "../CompanyComponents/DetailsContainer";

export default class DashboardContainer extends Component {
  state = {
    valuationMetrics: [],
    companyProfile: [],
    post: "",
    response: "",
    companyDetailsPage: null,
    notes: [],
    showPopup: false,
    showUpdatePopup: false,
    clickedFavorite: null,
    clickedNote: []
  };

  componentDidMount() {
    // fetch("http://localhost:5000/api/notes")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(notes => {
    //     const userNotes = notes.filter(note => {
    //       return note.userId === this.props.currentUser.id;
    //     });
    //     return this.setState({ notes: userNotes });
    //   });
    return this.handleNoteFetch();
  }

  handleNoteFetch = () => {
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
  };

  renderClickedNote = noteId => {
    const clickedNote = this.state.notes.find(note => {
      return note.id === noteId;
    });
    console.log("showing", clickedNote);
    return this.setState({
      clickedNote: clickedNote

      // watchNote: !this.state.watchNote
    });
  };

  handleValueMetricPost = async () => {
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

  displayNoteUpdate = () => {
    return this.setState({
      showUpdatePopup: !this.state.showUpdatePopup
    });
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

  removeNoteFromNotes = noteId => {
    const deleteNote = this.state.notes.find(item => item.id === noteId);
    console.log("delete Note", deleteNote, noteId);
    const updateNote = this.state.notes.filter(item => {
      return item.id !== noteId;
    });
    if (deleteNote) {
      this.setState({
        notes: updateNote
      });

      fetch(`http://localhost:5000/api/delete_note/${noteId}`, {
        method: "DELETE"
      });
    }
  };

  render() {
    // console.log("dashboard State", this.state);
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
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment inverted>
                  <SideCardContainer
                    valuationMetrics={this.state.valuationMetrics}
                    companyProfile={this.state.companyProfile}
                    displayCompanyDetailPage={this.displayCompanyDetailPage}
                    clickedTicker={this.props.clickedTicker}
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
                    removeFromWatchList={this.props.removeFromWatchList}
                    removeNoteFromNotes={this.removeNoteFromNotes}
                    displayNoteUpdate={this.displayNoteUpdate}
                    handleNoteFetch={this.handleNoteFetch}
                    renderClickedNote={this.renderClickedNote}
                    clickedNote={this.state.clickedNote}
                  />
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        ) : (
          <Segment inverted>
            <Label as="a" corner="right" color="red">
              <Icon
                name="remove"
                onClick={() => this.displayCompanyDetailPage()}
              />
            </Label>
            <DetailsContainer
              clickedTicker={this.props.clickedTicker}
              companyProfile={[this.state.companyProfile]}
              notes={this.state.notes}
              removeNoteFromNotes={this.removeNoteFromNotes}
              displayNoteUpdate={this.displayNoteUpdate}
            />
          </Segment>
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
        {this.state.showUpdatePopup ? (
          <UpdatePopUp
            displayNoteUpdate={this.displayNoteUpdate}
            clickedNote={this.state.clickedNote}
            user={this.props.user}
            clickedFavorite={this.props.clickedFavorite}
            handleNoteFetch={this.handleNoteFetch}
          />
        ) : null}
      </div>
    );
  }
}
