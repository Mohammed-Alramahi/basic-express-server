const express = require("express");
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");

const app = express();
app.use(logger);
app.get("/", (req, res) => {
  res.status(200).send("ALIVE!!");
});
app.get("/person", validator, (req, res) => {
  const { name } = req.query;
  res.status(200).json({ name: name });
});
//Middleware uses

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
