import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import LoginForm from "./Login";
import { login } from "../../actions/auth_user";

class LoginContainer extends Component {
  handleFormSubmission = values => {
    this.props.login(values);
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <LoginForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

export default reduxForm({ form: "Login form" })(
  connect(
    null,
    { login }
  )(LoginContainer)
);
