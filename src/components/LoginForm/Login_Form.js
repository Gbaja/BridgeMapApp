import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Header, Form } from "semantic-ui-react";

import { renderFormFields } from "../../helpers/redux_form";
import NavBar from "../Navigation/NavBar";
import Alert from "../Alert/Alert";

const propTypes = {
  alert: PropTypes.object,
  handleSubmit: PropTypes.func
};

const LoginForm = ({alert, onSubmit }) => (
  <NavBar>
    <Form onSubmit={onSubmit}>
      <Alert alert={alert} />
      <Header>Log in form</Header>
      <Field label="Email" name="email" component={renderFormFields} />
      <Field
        label="Password"
        name="password"
        type="password"
        component={renderFormFields}
      />
      <button type="submit">Sign in</button>
      <Link to="/">Cancel</Link>
    </Form>
  </NavBar>
);

LoginForm.propTypes = propTypes;

export default LoginForm;
