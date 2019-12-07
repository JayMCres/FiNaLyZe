import React from "react";
import { Menu } from "semantic-ui-react";

const HomePageMenu = props => {
  const { activeItem } = props;
  return (
    <Menu>
      <Menu.Item
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={props.handleMainMenuClick}
      >
        <strong style={{ color: "blue" }}> Dashboard</strong>
      </Menu.Item>

      <Menu.Item
        name="company"
        active={activeItem === "company"}
        onClick={props.handleMainMenuClick}
      >
        <strong style={{ color: "blue" }}> Company Analysis</strong>
      </Menu.Item>

      <Menu.Item
        name="news"
        active={activeItem === "news"}
        onClick={props.handleMainMenuClick}
      >
        <strong style={{ color: "blue" }}> News Feed</strong>
      </Menu.Item>
    </Menu>
  );
};

export default HomePageMenu;
