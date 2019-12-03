import React from "react";
import { Table, Message } from "semantic-ui-react";
import Note from "./CompanyNote";

const NoteList = props => {
  // console.log("Props in NoteList", props);
  return (
    // <Segment inverted>
    <Table striped celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" colSpan="4">
            <Message color="violet">View Company NoteList </Message>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>Delete</strong>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>Title</strong>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>Created</strong>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>View Note</strong>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              {...note}
              index={index}
              removeNoteFromNotes={props.removeNoteFromNotes}
              displayNoteUpdate={props.displayNoteUpdate}
            />
          );
        })}
      </Table.Body>
    </Table>
    // </Segment>
  );
};

export default NoteList;
