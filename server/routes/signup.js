const checkUser = require("../db_queries/check_user");
const {hashPassword} = require("../helpers/bcrypt");

exports.post = async (req, res) => {
  try {
    const userExist = await checkUser(req.body.email);
    if(!userExist.case){
      const hashUserPassword = await hashPassword(req.body.password);
      console.log(hashUserPassword);
    }
  } catch (error) {
    console.log(error);
  }
};
