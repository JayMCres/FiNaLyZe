import React, { Component } from "react";
import { Header, Button, Segment, Message, Icon } from "semantic-ui-react";

import WatchHeader from "./Header";
import Notes from "./Notes";

export default class Container extends Component {
  state = {
    currentNotes: [],
    WatchListNote: null
  };

  // componentDidMount() {
  //   // const setCurrentNotes = async () => {
  //   //   return this.setState({
  //   //     currentNotes: this.props.notes.filter(note => {
  //   //       return note.favTicker === this.props.ticker;
  //   //     })
  //   //   });
  //   // };

  //   this.setCurrentNotes();
  // }

  // setCurrentNotes = () => {
  //   const foundNotes = this.props.notes.filter(note => {
  //     return note.favTicker === this.props.ticker;
  //   });
  //   return this.setState({
  //     currentNotes: foundNotes
  //   });
  // };
  render() {
    // console.log("watch item Container State", this.props);
    const foundNotes = this.props.notes.filter(note => {
      return note.favTicker === this.props.ticker;
    });
    // console.log("found notes", foundNotes);
    return (
      <Segment inverted>
        <Message color="blue" attached="top">
          <Header as="h4">
            <Icon
              name="file alternate"
              size="mini"
              onClick={() => this.props.togglePopup(this.props.id)}
            />
            {this.props.name}
            {/* <Button floated="right" icon="sticky note" /> */}
          </Header>
        </Message>
        {/* <Segment */}
        {foundNotes.length === 0 ? (
          <Message> No Notes </Message>
        ) : (
          <Message
            attached="bottom"
            inverted
            style={{ overflow: "auto", maxHeight: 100 }}
          >
            <Notes notes={foundNotes} />
          </Message>
        )}
      </Segment>
    );
  }
}
