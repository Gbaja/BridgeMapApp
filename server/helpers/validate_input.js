const { body } = require("express-validator/check");

const {WF, YP} = require("./constants")

exports.validate = method => {
  switch (method) {
    case "createUser": {
      body("email", "Invalid email")
        .exists()
        .isEmail(),
      body("password", "Invalid password")
        .exists(),
      body("user_type", "Invalid user type")
        .exists()
        .isIn([WF, YP]);
    }
  }
};
