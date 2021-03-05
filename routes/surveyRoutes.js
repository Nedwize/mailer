const verifyAuth = require("../middleware/verifyAuth");
const requireCredits = require("../middleware/requireCredits");

module.exports = (app) => {
  app.post("/api/survey", verifyAuth, requireCredits, (req, res) => {});
};
