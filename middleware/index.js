const crypto = require("crypto");
const buffer = require("buffer");

exports.verifyHash = (value) => {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
  });
  const algorithm = "sha3-512";
  const data = Buffer.from(value);
  const signature = crypto.sign(algorithm, data, privateKey);
  return crypto.verify(algorithm, data, publicKey, signature);
};
