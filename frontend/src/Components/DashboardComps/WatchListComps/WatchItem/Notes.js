import React from "react";
import { List } from "semantic-ui-react";
import Note from "./Note";

const Notes = props => {
  return (
    <List divided relaxed>
      {props.notes.map((note, index) => {
        return <Note key={note.id} {...note} />;
      })}
    </List>
  );
};

export default Notes;
