import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signup } from "../../redux/actions/auth_user";
import SignupForm from "./Signup_Form";
import { checkEmail, checkPassword } from "../../helpers/form_validation";
import Alert from "../../components/Alert/Alert";
import { WF, YP } from "../../helpers/user_type";

class SignupContainer extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    alert: PropTypes.object
  };

  handleFormSubmission = values => {
    this.props.signup(values, res => {
      console.log(res)
      if (res.message.user_type === WF) {
        this.props.history.push(`/wf_dashboard`);
      }
      if (res.message.user_type === YP) {
        this.props.history.push(`/yp_dashboard`);
      }
    })
  };
  
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <h3>Signup form</h3>
        <Alert alert={alert} />
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

  if (!values.email || !checkEmail(values.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!values.password || !checkPassword(values.password)) {
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

const mapStateToProps = ({ alert }) => ({
  alert
});


export default reduxForm({ validate, form: "Signup form" })(
  connect(
    mapStateToProps,
    { signup }
  )(SignupContainer)
);
