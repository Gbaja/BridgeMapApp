const request = require("supertest");

const runDbBuild = require("../database/db_build");
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

  test("It should return 200 correct status code", done => {
    return request(app)
      .post("/api/signup")
      .send({
        email: "gbajaf@yahoo.co.uk",
        password: "heyyy",
        user_type: "oeie",
        consent: true
      })
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
