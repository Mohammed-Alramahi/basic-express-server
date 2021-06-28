module.exports = (req, res, next) => {
  console.log(`Request method: ${req.method}\nRequest path: ${req.path}`);
  next();
};
