const { validationResult } = require("express-validator/check");

const checkUser = require("../db_queries/check_user");
const oneUser = require("../db_queries/one_user");
const { comparePassword } = require("../helpers/bcrypt");
const dataSent = require("../helpers/sending_data");

exports.post = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const data = errors
        .array()
        .map(error => error.msg)
        .join(", ");
      return dataSent(res, 422, data, "error");
    }
    const userExist = await checkUser(req.body.email);
    if (!userExist.case) {
      const data = "An account has not been created with this email. Please sign up.";
      return dataSent(res, 422, data, "error");
    } else {
      const userData = await oneUser(req.body.email);
      const passwordMatch = await comparePassword(
        req.body.password,
        userData.password
      );
      if (passwordMatch) {
        delete userData.password;
        return dataSent(res, 200, userData, "success");
      } else {
        const data = "You have entered an invalid password. Please try again or reset password if forgotten";
        return dataSent(res, 422, data, "error");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
