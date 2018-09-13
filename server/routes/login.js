const checkUser = require("../db_queries/check_user");
const oneUser = require("../db_queries/one_user");
const { comparePassword } = require("../helpers/bcrypt");
const { successData, wrongInfoData } = require("../helpers/sending_data");

exports.post = async (req, res) => {
  try {
    const userExist = await checkUser(req.body.email);
    if (!userExist.case) {
      const message = "An account has not been created with this email. Please sign up.";
      return wrongInfoData(res, message);
    } else {
      const userData = await oneUser(req.body.email);
      const passwordMatch = await comparePassword(
        req.body.password,
        userData.password
      );
      if (passwordMatch) {
        delete userData.password;
        return successData(res, userData);
      } else {
        const message = "You have entered an invalid password. Please try again or reset password if forgotten";
        return wrongInfoData(res, message);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
