const AWS = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();

// var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
// AWS.config.credentials = credentials;

module.exports.s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_SDK_LOAD_CONFIG: 1,
});
