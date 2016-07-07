var User = require('../models/user');
var express  = require('express');
var app  = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');


module.exports.create = function (req, res) {
  
  var user = new User(req.body);

	// bcrypt.genSalt(10, function(err, salt) {
	//     bcrypt.hash(user.password, salt, function(err, hash) {
	//         user.password = hash;
	        //console.log(user.password);
	        user.save(function (err, result) {
		    	res.json(result);
		  	// });
	    // });
	});

	// bcrypt.compare(user.password, hash, function(err, res, hash) {
	//     res.json(results);
	// });

}

// module.exports.list = function (req, res) {
//   User.find({}, function (err, results) {

//   	if(err){
//   		res.error(err);
//   	} else {
//   		res.json(results);
//   	}
    
//   });
// }


module.exports.getUserById = function(uname, res){

	//var user = new User(req.body);

	var query = { uname : uname };

	console.log(query);

	// User.findOne({uname:'hiso'}, function (err, result1) {
	// User.find({uname:'hisoban'}, function (err, result1) {
	User.find(query, function (err, result1) {
		if(err){
			res.error(err);
		} else {
			console.log(result1);

    		res.json(result1);
		}

  });
}


// module.exports.getUsers = function(req, res){
// 	var user = new User(req.body);

// 	User.find({}, function(err, results){
// 		if (err){
// 			res.error(err);
// 		} else {
// 			res.json(results);
// 		}
// 	})
// }


// =====================================================



// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     	if(err) throw err;
//     	callback(null, isMatch);
// 	});
// }
//=================================================================