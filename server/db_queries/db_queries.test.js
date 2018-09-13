const checkUser = require("./check_user");
const addUser = require("./add_user");
const oneUser = require("./one_user");

describe("Check user query", ()=>{
  test("Should return true if email exist in database", () =>{
    const email = "k@a.com";
    checkUser(email)
      .then(queryRes=>{
        expect(queryRes.case).toBeTruthy();
      });
  });
  test("Should return false if email does not exist in database", () => {
    const email = "k@alakal.com";
    checkUser(email)
      .then(queryRes => {
        console.log(queryRes)
        expect(queryRes.case).toBeFalsy();
      });
  });
});

describe("Add user query", ()=>{
  const data = {
    email: "k@aq.com",
    password: "password123",
    user_type: "organizer"
  };
  test("Should return an array", () => {
    addUser(data)
      .then(queryRes => {
        console.log(queryRes.length)
        expect(Array.isArray(queryRes)).toBeTruthy();
      });
  });
  test("Should return an array with length one", () => {
    addUser(data).then(queryRes => {
      console.log(queryRes.length);
      expect(queryRes.length).toBe(1);
    });
  });
  test("Should return an array that contains an object with ID property", () => {
    addUser(data).then(queryRes => {
      console.log(queryRes.length);
      expect(queryRes[0].hasOwnProperty("id")).toBeTruthy();
    });
  });
});
describe("One user query", () => {
  test("Should return an object", () => {
    const email = "k@a.com";
    oneUser(email)
      .then(queryRes => {
        expect(typeof queryRes).toEqual("object");
      });
  });
  test("Should return a email value thats the same as the email passed in", () => {
    const email = "k@alakal.com";
    checkUser(email)
      .then(queryRes => {
        expect(queryRes.id).toEqual(email);
      });
  });
});