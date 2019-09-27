require('express-async-errors');
const { port } = require('./config/config');
const { dataBase} = require('./config/config');
const winston = ('winston');
const error = require('./middleware/error')
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const home = require('./routes/home');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();

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

//winston.add(winston.transports.File, {filename: 'errorlog.log'});

//new winston.transports.File({
//    filename: 'errors.log',
//    level: 'error'
//  });
// nota 1

//if (!config.get('jwtPrivateKey')) {
//    console.log('FATAL ERROR: jwt Private Key is not defined');
//    process.exit(1);
//}

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
    };

mongoose.connect(dataBase, options)
    .then(() => console.log('Connected to DB....'))
    .catch(err => console.log('Error connecting to database', err))

app.use(express.json());
app.use('/', home);
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use(error);

// Start the server
const PORT = port || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});




