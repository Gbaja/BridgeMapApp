const db = require("../database/db_connection");

const checkUser = email =>
  db
    .query(
      `SELECT CASE WHEN EXISTS(SELECT email FROM users WHERE email = $1) THEN CAST (true AS BOOLEAN)
  ELSE CAST (false AS BOOLEAN) END`,
      [email]
    )
    .then(res => res[0])
    .catch(err => console.log("one user query err: ", err));

module.exports = checkUser;
