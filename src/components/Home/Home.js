import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>BridgeMap</h1>
      <Link to="/login">Log in</Link>
      <Link to="signup">Sign up</Link>
    </div>
  );
};

export default Home;
