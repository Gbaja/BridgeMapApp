import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/redux_form";

const LoginForm = ({onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Field label="Email" name="email" component={renderFormFields} />
    <Field
      label="Password"
      name="password"
      type="password"
      component={renderFormFields}
    />
    <button type="submit">Sign in</button>
    <Link to="/">Cancel</Link>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
};

export default LoginForm;
