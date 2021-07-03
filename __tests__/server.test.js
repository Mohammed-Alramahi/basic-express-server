"use strict";
const { server } = require("../src/server.js");
const supertest = require("supertest");
const mockRequest = supertest(server);
describe("SERVER TEST:", () => {
  it("should respond with a 404 on not found", async () => {
    return mockRequest.get("/blah-blah").then((data) => {
      expect(data.status).toBe(404);
    });
  });
  it("should respond with a 200 success", async () => {
    return mockRequest.get("/person?name=ramahi").then((data) => {
      expect(data.status).toBe(200);
    });
  });
  it("should respond with a 500 on error", async () => {
    return mockRequest.get("/person").then((data) => {
      expect(data.status).toBe(500);
    });
  });
});
