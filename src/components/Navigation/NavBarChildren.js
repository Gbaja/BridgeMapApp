import React from "react";
import { Container } from "semantic-ui-react";

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "64px" }} fluid>{children}</Container>
);

export default NavBarChildren;