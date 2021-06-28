const loggerMiddleware = require("../src/middleware/logger.js");
describe("LOGGER MIDDLEWARE", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it("properly logs to the console", () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("properly go to the next middleware", () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
