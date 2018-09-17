import React, { Component } from 'react';

import LoginContainer from './Login/LoginContainer';
import SignupContainer from './Signup/SignupContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
       BridgeMap
       <LoginContainer />
       <SignupContainer/>
      </div>
    );
  }
}


export default App;
