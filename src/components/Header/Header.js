import React from "react";
import { Header } from "semantic-ui-react";

import "./Header.css";

const Heading = () => (
  <div className="heading">
    <Header as="h1" className="heading--title">
      BridgeMap
    </Header>
    <p className="heading--slogan">Bridging the gap between young people and the wider community.</p>
  </div>
);

export default Heading;
