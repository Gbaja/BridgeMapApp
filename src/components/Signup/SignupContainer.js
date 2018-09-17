import React, { Component } from 'react';
import {reduxForm} from "redux-form";


import SignupForm from './SignupForm';

class SignupContainer extends Component {
  render() {
    return (
      <div>
        <SignupForm />
      </div>
    )
  }
}

export default reduxForm({form: "Signup form"})(SignupContainer);