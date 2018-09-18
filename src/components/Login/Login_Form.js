import React from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/redux_form";

const LoginForm = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field label="Email" name="email" component={renderFormFields} />
    <Field
      label="Password"
      name="password"
      type="password"
      component={renderFormFields}
    />
    <button type="submit">Sign in</button>
  </form>
);

export default LoginForm;
