import React from "react";
import { List } from "semantic-ui-react";
import Note from "./Note";

const Notes = props => {
  return (
    <List divided relaxed>
      {props.notes.map(item => {
        // console.log(item);
        return <Note {...item} />;
      })}
    </List>
  );
};

export default Notes;
