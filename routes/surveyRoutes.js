const verifyAuth = require("../middleware/verifyAuth");

module.exports = (app) => {
  app.post("/api/survey", verifyAuth, (req, res) => {});
};
