import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

import "./Popup.css";
import UpdateForm from "./UpdateForm";

class UpdatePopUp extends Component {
  render() {
    // console.log("Popup", this.props);

    return (
      <div>
        <div className="popup">
          <div className="popup_inner">
            <div>
              <Segment inverted>
                <Button onClick={() => this.props.displayNoteUpdate()}>
                  close me
                </Button>
                <br />
                <br />

                <UpdateForm
                  user={this.props.user}
                  clickedFavorite={this.props.clickedFavorite}
                  clickedNote={this.props.clickedNote}
                  displayNoteUpdate={this.props.displayNoteUpdate}
                />
              </Segment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePopUp;
