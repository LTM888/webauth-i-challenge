
const express = require('express');
const helmet = require('helmet');

const usersRouter = require('../users/usersRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/updata', usersRouter);

module.exports = server;