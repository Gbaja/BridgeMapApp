import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signup } from "../../redux/actions/auth_user";
import SignupForm from "../../components/SignupForm/SignupForm";
import { checkEmail, checkPassword } from "../../helpers/form_validation";
import { WF, YP } from "../../helpers/constants";

const propTypes = {
  handleSubmit: PropTypes.func,
  alert: PropTypes.object
};

class SignupContainer extends Component {
  handleFormSubmission = values => {
    const { signup, history } = this.props;
  
    signup(values, res => {
      if (res.message.user_type === WF) {
        history.push(`/wf_dashboard`);
      }
      if (res.message.user_type === YP) {
        history.push(`/yp_dashboard`);
      }
    })
  };
  
  render() {
    const { handleSubmit, alert } = this.props;

    return (
        <SignupForm
          handleSubmit={handleSubmit}
          onSubmit={this.handleFormSubmission}
          alert={alert}
        />
    );
  }
}

const validate = values => {
  const errors = {};

  if(!values.email || !checkEmail(values.email)) {
    errors.email = "Enter a valid email.";
  }
  if(!values.password || !checkPassword(values.password)) {
    errors.password = "Passwords must have one capital letter, one number, one special case letter(!@#$&*.) and must be a minimum of 6 characters.";
  }
  if(values.confirm_password !== values.password ){
    errors.confirm_password = "Please make sure your password match."
  }
  if(!values.user_type || values.user_type === "select"){
    errors.user_type = "Please select a user registration type."
  }
  if(!values.consent){
    errors.consent = "Please agree to the terms and condition."
  }

  return errors;
};

const mapStateToProps = ({ alert }) => ({
  alert
});

SignupContainer.propTypes = propTypes;

export default reduxForm({ validate, form: "Signup form" })(
  connect(
    mapStateToProps,
    { signup }
  )(SignupContainer)
);
