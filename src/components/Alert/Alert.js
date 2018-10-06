import React from "react";

import {ERROR_ALERT} from "../../helpers/user_type";

function Alert({ alert: {message, type} }) { 
  return type == ERROR_ALERT && <div><p>{message}</p></div>;
}

export default Alert;

// having a function defined like it is above makes it easy to debug as it shows error message that includes the function name whereas with arrow function it treats the function as an anonymous function.
