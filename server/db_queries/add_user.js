const db = require("../database/db_connection");

const addUser = data =>
  db.query(
    `INSERT INTO users (email, password, user_type, consent) VALUES ($1, $2, $3, $4) RETURNING *`,
    [data.email, data.password, data.user_type, data.consent]
  );

module.exports = addUser;
