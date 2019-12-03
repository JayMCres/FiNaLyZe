import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UpdateForm extends Component {
  state = {
    updateTitle: "",
    updateBody: ""
  };

  componentDidMount() {
    this.setState({
      updateTitle: this.props.clickedNote.title,
      updateBody: this.props.clickedNote.content
    });
  }

  editNote = event => {
    // console.log("updating");

    event.preventDefault();
    // console.log(event.target)
    fetch(`http://localhost:5000/api/edit_note/${this.props.clickedNote.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        // favId: this.props.clickedFavorite.id,
        // favTicker: this.props.clickedFavorite.ticker,
        // favName: this.props.clickedFavorite.name,
        updateTitle: this.state.updateTitle,
        updateBody: this.state.updateBody
        // userId: this.props.user.id
      })
    }).then(response => {
      // console.log("response", response);
      response.json();
    });
    this.props.displayNoteUpdate();
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    console.log("update Note Form", this.state);
    return (
      <div>
        <Form onSubmit={this.editNote}>
          {/* <input
            name="favId"
            value={this.props.clickedFavorite.id}
            ref="favId"
          /> */}
          <Form.Field>
            <label style={{ color: "blue" }}>Title</label>
            <input
              name="updateTitle"
              // placeholder={this.props.clickedNote.title}
              value={this.state.updateTitle}
              onChange={this.handleInputChange}
              ref="updateTitle"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "blue" }}>Content</label>
            <textarea
              name="updateTitle"
              // placeholder={this.props.clickedNote.content}
              value={this.state.updateBody}
              onChange={this.handleInputChange}
              ref="updateTitle"
            />
          </Form.Field>
          <Button type="submit">Update</Button>
          {/* <input type="submit" value="Submit" /> */}
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
