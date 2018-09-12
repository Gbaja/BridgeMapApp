const tape = require("tape");

const checkUser = require("./check_user");
const addUser = require("./add_user");
const oneUser = require("./one_user");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("check user query", t => {
  const email = "k@a.com";
  checkUser(email)
    .then(queryRes => {
      console.log("QUERY RES: ", queryRes);
      t.equals(
        queryRes[0].case,
        true,
        "Should return true if email exists in database"
      );
      t.end();
    })
    .catch(err => {
      throw err;
    });
});

tape("check user query", t => {
  const email = "q@a.com";
  checkUser(email)
    .then(queryRes => {
      console.log("QUERY RES: ", queryRes);
      t.equals(
        queryRes[0].case,
        false,
        "Should return false if email does not exist in database"
      );
      t.end();
    })
    .catch(err => {
      throw err;
    });
});

tape("add user query", t => {
  const data = {
    email: "k@aq.com",
    password: "password123",
    user_type: "organizer"
  };
  addUser(data)
    .then(queryRes => {
      console.log("QUERY RES: ", queryRes);
      t.equals(
        Array.isArray(queryRes),
        true,
        "Should return an array of data for newly added user from database"
      );
      t.equal(
        queryRes[0].hasOwnProperty("id"),
        true,
        "Data returned should include an id"
      );
      t.end();
    })
    .catch(err => {
      throw err;
    });
});

tape("one user query", t => {
  oneUser("k@aq.com").then(queryRes => {
    console.log(queryRes);
    t.equals(typeof queryRes, "object", "Should return an object");
  });
});
