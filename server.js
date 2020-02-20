const express = require('express')
const routes = require('./math/routes');


const server = express();
server.use('/',routes);
exports.server = server;