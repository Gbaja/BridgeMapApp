const checkUser = require("../db_queries/check_user");
const { hashPassword } = require("../helpers/bcrypt");
const addUser = require("../db_queries/add_user");

exports.post = async (req, res) => {
  try {
    const userExist = await checkUser(req.body.email);
    if (!userExist.case) {
      const hashUserPassword = await hashPassword(req.body.password);
      const userData = {
        email: req.body.email,
        password: hashUserPassword,
        user_type: req.body.user_type,
        consent: req.body.consent
      };
      const userAddedData = await addUser(userData);
      res.send(userAddedData);
    } else{
      res.status(422).send({type: "error", message: "An account has been created with this email. Please log in."});
    }
  } catch (error) {
    console.log(error);
  }
};
