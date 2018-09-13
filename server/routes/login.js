const checkUser = require("../db_queries/check_user");
const oneUser = require("../db_queries/one_user");
const { comparePassword } = require("../helpers/bcrypt");

exports.post = async (req, res) => {
  try {
    const userExist = await checkUser(req.body.email);
    if (!userExist.case) {
      res.status(422).send({
        type: "error",
        message:
          "An account has not been created with this email. Please sign up."
      });
    } else {
      const userData = await oneUser(req.body.email);
      const passwordMatch = await comparePassword(
        req.body.password,
        userData.password
      );
      console.log("PASSWORD MATCH: ", passwordMatch);
      if (passwordMatch) {
        res.status(200).send({
          type: "success",
          data: userData
        });
      } else {
        res.status(422).send({
          type: "error",
          message:
            "You have entered an invalid password. Please try again or reset password if forgotten"
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
