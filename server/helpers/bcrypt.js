const bcrypt = require("bcryptjs");

const hashPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });

const comparePassword = (enteredPassword, storedPassword) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(enteredPassword, storedPassword, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

module.exports = { hashPassword, comparePassword };
