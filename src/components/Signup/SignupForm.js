import React, { Fragment } from "react";
import { Field } from "redux-form";

import { renderFormFields } from "../../helpers/reduxform";

const SignupForm = () => {
  return (
    <Fragment>
      <Field label="Email" name="email" component={renderFormFields} />
      <Field
        label="User Type"
        name="userType"
        component={renderFormFields}
        select
        options={{
          select: "select your account type",
          Mentor: "Young person",
          Mentee: "Workshop facilitator"
        }}
      />
      <Field
        label="Password"
        name="password"
        type="password"
        component={renderFormFields}
      />
      <Field
        type="checkbox"
        label="I confirm that the information I have given are mine and accurate. I have ready the Privacy Policy and know how BridgeMap uses my data"
        name="confirmDetails"
        component={renderFormFields}
      />
      <button type="submit">Sign up</button>
    </Fragment>
  );
};

export default SignupForm;
