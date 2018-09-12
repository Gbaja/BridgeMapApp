const db = require("../database/db_connection");

const addUser = data =>
  db.query(
    `INSERT INTO users (email, password, user_type) VALUES ($1, $2, $3) RETURNING *`,
    [data.email, data.password, data.user_type]
  );

module.exports = addUser;
