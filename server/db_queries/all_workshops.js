const db = require("../database/db_connection");

const allWorkshops = () =>
  db
    .query(`SELECT * FROM workshops`)
    .catch(err => console.log("one user query err: ", err));

module.exports = allWorkshops;