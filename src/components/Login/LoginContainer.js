import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginForm from "./LoginForm";
import { login } from "../../actions/auth_user";

class LoginContainer extends Component {
  handleFormSubmission = values => {
    this.props.login(values);
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        {alert.type === "error" && <p>{alert.message}</p>}
        <LoginForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  handleSubmit: PropTypes.func,
  alert: PropTypes.object
};

const mapStateToProps = ({alert}) => ({
  alert
})

export default reduxForm({ form: "Login form" })(
  connect(
    mapStateToProps,
    { login }
  )(LoginContainer)
);
