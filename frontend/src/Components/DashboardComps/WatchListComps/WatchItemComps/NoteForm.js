import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class NoteForm extends Component {
  state = {
    title: "",
    body: ""
  };

  // editNote = event => {
  //   // const target = event.target;
  //   // const value = target.value;
  //   // const name = target.name;
  //   event.preventDefault();
  //   // console.log(event.target)
  //   fetch("http://localhost:5000/api/user_note", {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       favId: this.props.clickedFavorite.id,
  //       favTicker: this.props.clickedFavorite.ticker,
  //       favName: this.props.clickedFavorite.name,
  //       title: this.refs.title.value,
  //       content: this.refs.body.value,
  //       userId: this.props.user.id
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(newNote => this.props.addNewNoteToNotes(newNote))
  //     .then(
  //       this.setState({
  //         title: "",
  //         body: ""
  //       })
  //     );
  // };

  addNote = event => {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    event.preventDefault();
    // console.log(event.target)
    fetch("http://localhost:5000/api/user_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        favId: this.props.clickedFavorite.id,
        favTicker: this.props.clickedFavorite.ticker,
        favName: this.props.clickedFavorite.name,
        title: this.refs.title.value,
        content: this.refs.body.value,
        userId: this.props.user.id
      })
    })
      .then(response => response.json())
      .then(newNote => this.props.addNewNoteToNotes(newNote))
      .then(
        this.setState({
          title: "",
          body: ""
        })
      );
    // this.refreshNotePage();
  };

  // refreshNotePage = () => {
  //   window.location.reload(false);
  // };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    console.log("Note Form", this.props);
    return (
      <div>
        {/* <form onSubmit={this.addNote}> */}
        <Form onSubmit={this.addNote}>
          {/* <input
            name="favId"
            value={this.props.clickedFavorite.id}
            ref="favId"
          /> */}
          <Form.Field>
            <label style={{ color: "blue" }}>Title</label>
            <input
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleInputChange}
              ref="title"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "blue" }}>Content</label>
            <textarea
              name="body"
              placeholder="Write Note ...."
              value={this.state.body}
              onChange={this.handleInputChange}
              ref="body"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
          {/* <input type="submit" value="Submit" /> */}
        </Form>
      </div>
    );
  }
}

export default NoteForm;
