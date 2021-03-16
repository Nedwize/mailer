const mongoose = require("mongoose");
const verifyAuth = require("../middleware/verifyAuth");
const requireCredits = require("../middleware/requireCredits");
const nodemailer = require("nodemailer");

const keys = require("../config/keys");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  // Method: POST
  // Desc: Creates a new survey
  app.post("/api/survey", verifyAuth, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

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

    //   const smtpTransport = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //       type: "OAuth2",
    //       user: req.user.googleId,
    //       clientID: keys.googleClientID,
    //       clientSecret: keys.googleClientSecret,
    //       refreshToken: req.user.refreshToken,
    //       accessToken: req.user.accessToken,
    //     },
    //     tls: {
    //       rejectUnauthorized: false,
    //     },
    //   });

    //   const mailOptions = {
    //     from: req.user.googleId,
    //     to: recipientMail,
    //     subject: "Node.js Email with Secure OAuth",
    //     generateTextFromHTML: true,
    //     html: "<b>test</b>",
    //   };

    //   smtpTransport.sendMail(mailOptions, (error, response) => {
    //     error ? console.log(error) : console.log(response);
    //     smtpTransport.close();
    //   });
  });

  // Method: GET
  // Desc: Returns a list of all surveys for the user
  app.get("/api/surveys", verifyAuth, (req, res) => {});
};
