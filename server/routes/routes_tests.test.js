const request = require("supertest");


const app = require("../index");

describe("Test the example route path", () => {
  test("It should return correct status code", done => {
    request(app)
      .get("/api/hello")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the sign up route", () => {
  test("It should return 200 correct status code", async done => {
    const requestInfo = 
    request(app)
      .post("/api/signup")
      console.log(requestInfo.status)
    //  .then(response => {
        expect(requestInfo.statusCode).toBe(200);
        done();
     // });
  });
});
