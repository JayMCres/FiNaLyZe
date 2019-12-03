import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

import "./Popup.css";
import NoteForm from "./NoteForm";
// import UpdateForm from "./UpdateForm";

class NotePopUp extends Component {
  render() {
    // console.log("Popup", this.props);

    return (
      <div>
        <div className="popup">
          <div className="popup_inner">
            <div>
              <Segment inverted>
                <Button onClick={() => this.props.closePopup()}>
                  close me
                </Button>
                <br />
                <br />
                <NoteForm
                  user={this.props.user}
                  addNewNoteToNotes={this.props.addNewNoteToNotes}
                  clickedFavorite={this.props.clickedFavorite}
                />
                {/* {this.props.showUpdatePopup === true ? (
                  <UpdateForm
                    user={this.props.user}
                    clickedFavorite={this.props.clickedFavorite}
                    clickedNote={this.props.clickedNote}
                    displayNoteUpdate={this.props.displayNoteUpdate}
                  />
                ) : null} */}
                {/* )} */}
              </Segment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotePopUp;
