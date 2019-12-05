import React from "react";
import { Menu } from "semantic-ui-react";

const HomePageMenu = props => {
  return (
    <Menu>
      <Menu.Item
        style={{ color: "blue" }}
        name="ticker"
        onClick={() => props.toggleMainMenu()}
      >
        <strong> Dashboard </strong>
      </Menu.Item>
      <Menu.Item
        style={{ color: "blue" }}
        name="company"
        onClick={() => props.toggleMainMenu("company")}
      >
        <strong> Company Analysis </strong>
      </Menu.Item>
      <Menu.Item
        style={{ color: "blue" }}
        name="news"
        onClick={() => props.toggleMainMenu("news")}
      >
        <strong> News Feed </strong>
      </Menu.Item>
    </Menu>
  );
};

export default HomePageMenu;
