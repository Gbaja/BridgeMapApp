import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

import { renderFormFields } from "../../helpers/redux_form";
import Alert from "../Alert/Alert";
import NavBar from "../Navigation/NavBar";

const propTypes = {
  handleSubmit: PropTypes.func,
  alert: PropTypes.object,
};

const SignupForm = ({ handleSubmit, onSubmit, alert }) => {
  return (
    <NavBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Alert alert={alert} />
        <Header>Signup form</Header>
        <Field label="Email" name="email" component={renderFormFields} />
        <Field
          label="User Type"
          name="user_type"
          component={renderFormFields}
          select
          options={{
            select: "select your account type",
            "Young person": "Young person",
            "Workshop facilitator": "Workshop facilitator"
          }}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={renderFormFields}
        />
        <Field
          label="Confirm password"
          name="confirm_password"
          type="password"
          component={renderFormFields}
        />
        <Field
          type="checkbox"
          label="I confirm that the information I have given are mine and accurate. I have ready the Privacy Policy and know how BridgeMap uses my data"
          name="consent"
          component={renderFormFields}
        />
        <button type="submit">Sign up</button>
        <Link to="/">Cancel</Link>
      </form>
    </NavBar>
  );
};

SignupForm.propTypes = propTypes;

export default SignupForm;
