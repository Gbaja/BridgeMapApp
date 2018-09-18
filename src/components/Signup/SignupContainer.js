import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import { signup } from "../../actions/auth_user";
import SignupForm from "./SignupForm";
import { checkEmail, checkPassword } from "../../helpers/form_validation";

class SignupContainer extends Component {
  handleFormSubmission = values => {
    this.props.signup(values);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <SignupForm
          handleSubmit={handleSubmit}
          onSubmit={this.handleFormSubmission}
        />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email || checkEmail(values.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!values.password || checkPassword(values.password)) {
    errors.password = "Please enter a password.";
  }
  if(values.confirm_password !== values.password ){
    errors.confirm_password = "Please make sure your password match."
  }
  if (!values.user_type || values.user_type === "select"){
    errors.user_type = "Please select a user registration type."
  }
  if(!values.consent){
    errors.consent = "Please agree to the terms and condition."
  }

  return errors;
};

export default reduxForm({ validate, form: "Signup form" })(
  connect(
    null,
    { signup }
  )(SignupContainer)
);
