const winstone = require('winston');
const { port } = require('./config/config');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/database')();
require('./startup/routes')(app);
require('./startup/config')();
require('./startup/validation')();

const PORT = port || 8080;
const server = app.listen(PORT, () => { winstone.info(`App listening on port: ${PORT}`)});

module.exports = server;




