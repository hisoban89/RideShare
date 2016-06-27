var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var passport = require('passport');

module.exports = mongoose.model('User', {
  fname: String,
  lname: String,
  uname: String,
  password: String
});

// ==================================================================



// ==================================================================