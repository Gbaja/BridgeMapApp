const checkUser = require("../db_queries/check_user");

exports.post = (req, res)=>{
  checkUser(req.body.email)
    .then(result=>{
      return res.send(result);
    });
};