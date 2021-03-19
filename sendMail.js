const nodemailer = require("nodemailer");
const keys = require("./config/keys");
const recipientMail = "nakshatra163@gmail.com";

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "nakshatra.codes@gmail.com",
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    refreshToken: keys.refreshToken,
    accessToken: keys.accessToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailOptions = {
  from: "nakshatra.codes@gmail.com",
  to: recipientMail,
  subject: "Node.js Email with Secure OAuth",
  generateTextFromHTML: true,
  html: "<b>test</b>",
};

smtpTransport.sendMail(mailOptions, (error, response) => {
  error ? console.log(error) : console.log(response);
  smtpTransport.close();
});
