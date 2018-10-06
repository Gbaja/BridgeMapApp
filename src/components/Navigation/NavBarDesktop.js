import React from "react";
import { Menu, Image } from "semantic-ui-react";

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    {leftItems.map(item => (
      <Menu.Item {...item} />
    ))}
    <Menu.Menu position="right">
      {rightItems.map(item => (
        <Menu.Item {...item} />
      ))}
    </Menu.Menu>
  </Menu>
);

export default NavBarDesktop;
