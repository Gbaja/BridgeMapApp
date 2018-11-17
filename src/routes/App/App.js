import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import YP_Dashboard_Container from "../Dashboard/YP_Dashboard/YP_Dashboard_Container";
import WF_Dashboard_Container from "../Dashboard/WF_Dashboard/WF_Dashboard_Container";
import LoginContainer from "../Login/Login_Container";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import Workshops from "../Workshops/Workshops";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/workshops" component={Workshops} />
          <Route exact path="/wf_dashboard" component={WF_Dashboard_Container} />
          <Route exact path="/yp_dashboard" component={YP_Dashboard_Container} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
