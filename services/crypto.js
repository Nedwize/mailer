const keys = require("../config/keys");

var crypto = require("crypto"),
  cipher_seed = keys.cipher;

let iv = crypto.randomBytes(16);

var encrypt = function (text) {
  var cipher = crypto.createCipheriv("aes-256-cbc", cipher_seed, iv),
    crypted = cipher.update(text, "utf8", "hex");

  crypted += cipher.final("hex");

  return crypted;
};

var decrypt = function (text) {
  var decipher = crypto.createDecipheriv("aes-256-cbc", cipher_seed, iv),
    decrypted = decipher.update(text, "hex", "utf8");

  decrypted += decipher.final("utf8");

  return decrypted;
};

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
