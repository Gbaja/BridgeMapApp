const db = require("../database/db_connection");

const oneUser = email =>
  db
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then(res => res[0])
    .catch(err => console.log("one user query err: ", err));

module.exports = oneUser;