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
