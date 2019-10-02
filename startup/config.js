//const dotenv = require('dotenv');
//const result = dotenv.config();
const config = require('config');

const jwtpk = config.get('Authentication.jwt.privateKey');

module.exports = function() {
    if (!jwtpk) {
        throw new Error('FATAL ERROR: jwt Private Key is not defined') 
      }
};
