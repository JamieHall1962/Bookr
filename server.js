const express = require('express');
const logger = require("morgan");
const helmet = require("helmet");
const cors = require('cors');

const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const reviewsRouter = require('./routes/reviews');


const server = express();

server.use(logger('dev'), helmet(),  cors(), express.json());

server.use('/api/users', usersRouter);
server.use('/api/books', booksRouter);
server.use('/api/reviews', reviewsRouter);

module.exports = server;