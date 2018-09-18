import React, { Component } from 'react';

import LoginContainer from './Login/Login_Container';
import SignupContainer from './Signup/Signup_Container';

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
