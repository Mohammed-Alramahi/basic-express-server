"use strict";
const { server } = require("../src/server.js");
const supertest = require("supertest");
const mockRequest = supertest(server);
describe("NAME VALIDATION TESTING", () => {
  it("should respond of 500", async () => {
    return mockRequest.get("/person").then((data) => {
      expect(data.status).toEqual(500);
    });
  });
  it("responds correctly to the http:get /person", async () => {
    const response = await mockRequest.get("/person?name=ramahi");
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual("ramahi");
  });
});
