// const MailGen = require("mailgen");

// const mailGenerator = new MailGen({
//   theme: "cerberus",
//   product: {
//     name: "IEEE ACM AUR",
//     link: "https://mailgen.js/",
//     // Custom copyright notice
//     copyright: "Copyright © 2016 IEEE. All rights reserved.",
//   },
// });

// const email = {
//   body: {
//     name: "Nakshatra Saxena",
//     intro: "Welcome to email verification",
//     action: {
//       instructions: "Please click the button below to verify your account",
//       button: {
//         color: "#33b5e5",
//         text: "Verify account",
//         link: "http://example.com/verify_account",
//       },
//     },
//   },
// };

// const emailTemplate = mailGenerator.generate(email);
// require("fs").writeFileSync("templates/preview.html", emailTemplate, "utf8");
var crypto = require("./services/crypto");

var data = "My name is Nuts";

// Encryption
var encrypted_data = crypto.encrypt(data);
console.log(encrypted_data);

// Decryption
var decrypted_data = crypto.decrypt(encrypted_data);
console.log(decrypted_data);
