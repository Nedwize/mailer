const mongoose = require("mongoose");
const verifyAuth = require("../middleware/verifyAuth");
const requireCredits = require("../middleware/requireCredits");
// const nodemailer = require("nodemailer");

const keys = require("../config/keys");
const { decrypt } = require("../services/crypto");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  // Method: POST
  // Desc: Creates a new survey
  app.post("/api/survey", verifyAuth, requireCredits, (req, res) => {
    const accessToken = decrypt(req.user.accessToken);
    const refreshToken = decrypt(req.user.refreshToken);

    const { title, subject, body, recipientMail } = req.body;

    // const survey = new Survey({
    //   title,
    //   subject,
    //   body,
    //   recipients: recipients.split(",").map((email) => {
    //     return { email: email.trim() };
    //   }),
    //   _user: req.user.id,
    //   createdAt: Date.now(),
    // });

    const smtpTransport = nodemailer.createTransport({
      pool: true,
      maxConnections: 20,
      maxMessages: 1000,
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: req.user.email,
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: req.user.email,
      to: recipientMail,
      subject: "Node.js Email with Secure OAuth",
      generateTextFromHTML: true,
      html: "<b>test</b>",
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response);
      smtpTransport.close();
    });
  });

  // Method: GET
  // Desc: Returns a list of all surveys for the user
  app.get("/api/surveys", verifyAuth, (req, res) => {});
};
