// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  dataBase: process.env.DB_PATH,
  privateKey: process.env.AUTH_JWTPK,
  port: process.env.PORT
};