const dotenv = require('dotenv');
const result = dotenv.config()

module.exports = function() {
    if (result.error) {
        throw new Error('FATAL ERROR: jwt Private Key is not defined') 
      }
};
