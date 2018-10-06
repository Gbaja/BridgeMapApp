import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <Menu secondary stackable>
        <Menu.Item name="BridgeMap" />
        <Menu.Menu position="right">
          <Menu.Item name="About" />
          <Menu.Item name="Explore" />
          <Menu.Item name="Contact us" />
          <Menu.Item link><Link to="/signup">Log in</Link></Menu.Item>
          <Menu.Item link><Link to="/login">Sign up</Link></Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
