import React from "react";
import { Header } from "semantic-ui-react";

import "./Home.css";

const Heading = () => (
  <div className="header">
    <Header as="h1" className="header--title">
      BridgeMap
    </Header>
    <p className="header--slogan">Bridging the gap between young people and the wider community.</p>
  </div>
);

export default Heading;
