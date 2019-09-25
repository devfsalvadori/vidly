const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Joi = require('joi');
const {User} = require('../models/user')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

module.exports = router;