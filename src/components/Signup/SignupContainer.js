import React, { Component } from 'react';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";

import {signup} from "../../actions/auth_user"

import SignupForm from './SignupForm';

class SignupContainer extends Component {
    handleFormSubmission = values =>{
        this.props.signup(values);
    }
  render() {
      const {handleSubmit} = this.props;
    return (
      <div>
        <SignupForm handleSubmit={handleSubmit} onSubmit={this.handleFormSubmission}/>
      </div>
    )
  }
}

export default reduxForm({form: "Signup form"})(connect(null, {signup})(SignupContainer));