import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginForm from "./Login_Form";
import { login } from "../../actions/auth_user";
import {checkEmail} from "../../helpers/form_validation"
import Alert from "../Alert/Alert";

class LoginContainer extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    alert: PropTypes.object
  };

  handleFormSubmission = values => {
    this.props.login(values);
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <h3>Login form</h3>
        <Alert alert={alert} />
        <LoginForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}


const validate = values => {
  const errors = {};

  if (!values.email || !checkEmail(values.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

const mapStateToProps = ({ alert }) => ({
  alert
});

export default reduxForm({ validate, form: "Login form" })(
  connect(
    mapStateToProps,
    { login }
  )(LoginContainer)
);
