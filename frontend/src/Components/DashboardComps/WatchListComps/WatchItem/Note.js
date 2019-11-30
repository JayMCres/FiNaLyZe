import React from "react";
import { List } from "semantic-ui-react";

const Note = props => {
  // console.log(props);
  return (
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{props.title}</List.Header>
        <List.Description as="a">{props.createdAt}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default Note;
