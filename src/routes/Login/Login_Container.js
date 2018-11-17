import React, { Component, Fragment } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginForm from "../../components/LoginForm/Login_Form";
import { login } from "../../redux/actions/auth_user";
import {checkEmail} from "../../helpers/form_validation"
import {WF, YP} from "../../helpers/constants";

const propTypes = {
  handleSubmit: PropTypes.func,
  alert: PropTypes.object
}
class LoginContainer extends Component {
  handleFormSubmission = values => {
    const { login, history } = this.props;

    login(values, res => {
      const { user_type } = res.message;

      if (user_type === WF) {
        history.push(`/wf_dashboard`);
      }
      if (user_type === YP) {
        history.push(`/yp_dashboard`);
      }
    });
  };

  handleSubmit = () => this.props.handleSubmit(this.handleFormSubmission);

  render() {
    const { alert } = this.props;

    return (
      <Fragment>
        <LoginForm onSubmit={this.handleSubmit()} alert={alert}/>
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

LoginContainer.propTypes = propTypes;

export default reduxForm({ validate, form: "Login form" })(
  connect(
    mapStateToProps,
    { login }
  )(LoginContainer)
);
