const mongoose = require("mongoose");
const verifyAuth = require("../middleware/verifyAuth");
const requireCredits = require("../middleware/requireCredits");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  // Method: POST
  // Desc: Creates a new survey
  app.post("/api/survey", verifyAuth, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      createdAt: Date.now(),
    });
  });

  // Method: GET
  // Desc: Returns a list of all surveys for the user
  app.get("/api/surveys", verifyAuth, (req, res) => {});
};
