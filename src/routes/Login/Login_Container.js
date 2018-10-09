import React, { Component, Fragment } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginForm from "./Login_Form";
import { login } from "../../redux/actions/auth_user";
import {checkEmail} from "../../helpers/form_validation"
import Alert from "../../components/Alert/Alert";
import {WF, YP} from "../../helpers/user_type";

class LoginContainer extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    alert: PropTypes.object
  };

  handleFormSubmission = values => {
    this.props.login(values, res => {
      console.log(res);
      if (res.message.user_type === WF) {
        this.props.history.push(`/wf_dashboard`);
      }
      if (res.message.user_type === YP) {
        this.props.history.push(`/yp_dashboard`);
      }
    });
  };

  handleSubmit = () => this.props.handleSubmit(this.handleFormSubmission);

  render() {
    const { alert } = this.props;
    return (
      <Fragment>
        <LoginForm onSubmit={this.handleSubmit()} alert/>
      </Fragment>
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
