const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js');
const recipesRouter = require('../recipes/recipe-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ api: 'running', environment: process.env.DB_ENV });
});

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
// server.use('/api/recipes', recipesRouter);

module.exports = server;
