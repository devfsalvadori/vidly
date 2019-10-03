
require('express-async-errors');
//require('winston-mongodb');
const winston = require('winston');

module.exports = function() {
    process.on('uncaughtException', ex => {
        console.log('WE GOT AN UNCAUGHT EXEPTION');
        winston.log(ex.message, ex);
        process.exit(1);
      });
      
      process.on('unhandledRejection', ex => {
        console.log('WE GOT AN UNHANDLED REJECTION');
        winston.log(ex.message, ex);
        process.exit(1);
      });


      //winston.add(new winston.transports.Console, {colorize: true, prettyPrint: true});

      //winston.add(winston.transports.File, {filename: 'errorlog.log'});
      
      //new winston.transports.File({
      //    filename: 'errors.log',
      //    level: 'error'
      //  });
}