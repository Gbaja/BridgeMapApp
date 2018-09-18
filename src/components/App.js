import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginContainer from './Login/Login_Container';
import SignupContainer from './Signup/Signup_Container';
import Home from './Home/Home';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}


export default App;
