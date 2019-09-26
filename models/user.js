const { privateKey } = require('../config/config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
  },
  email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
  },
  password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
  },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() {
  //const token = jwt.sign({id: user._id}, config.get('jwtprivatekey'));
  //const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, 'mytestprivatekeyjwt');
  //const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('Authentication.JWT.privateKey'));
  const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, privateKey);
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(8).max(255).required().email(),
    password: Joi.string().min(8).max(255).required()
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;
