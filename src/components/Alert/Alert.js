import React from "react";
import { Message } from "semantic-ui-react";

import {ERROR_ALERT} from "../../helpers/user_type";

function Alert({ alert: {message, type} }) { 
  return type === ERROR_ALERT && (
    <Message negative>
      <Message.Header>Log in unsuccessful</Message.Header>
      <p>{message}</p>
    </Message>
  );
}

export default Alert;

// having a function defined like it is above makes it easy to debug as it shows error message that includes the function name whereas with arrow function it treats the function as an anonymous function.
