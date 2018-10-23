const { check } = require('express-validator/check');

exports.validate = (method) => {
  switch (method) {
  case 'login': {
    check("email", "Invalid email").isEmail(), 
    check("password", "Password must be 8 characters long.").isLength({ min: 8 });
  }
  }
};
