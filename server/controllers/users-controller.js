var User = require('../models/user');
var express  = require('express');
var app  = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports.create = function (req, res) {
  var user = new User(req.body);
  user.save(function (err, result) {
    res.json(result);
  });
}

// module.exports.create = function(newUser, callback){
// 	bcrypt.genSalt(10, function(err, salt) {
// 	    bcrypt.hash(newUser.password, salt, function(err, hash) {
// 	        newUser.password = hash;
// 	        newUser.save(callback);
// 	    });
// 	});
// }



module.exports.list = function (req, res) {
  User.find({}, function (err, results) {
    res.json(results);
  });
}

module.exports.getUsers = function(req, res){
	User.find({}, function(err, usersData){
		if (err){
			res.error(err);
		} else {
			res.json(usersData);
		}
	})
}

// =====================================================





//=================================================================