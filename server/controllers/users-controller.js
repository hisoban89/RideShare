var User = require('../models/user');
var express  = require('express');
var app  = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');


module.exports.create = function (req, res) {
  
  var user = new User(req.body);

	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(user.password, salt, function(err, hash) {
	        user.password = hash;
	        console.log(user.password);

	        // ==== original=====================
	        user.save(function (err, result) {
		    	res.json(result);
		    // ==== original=====================


		  	});
	    });


	});
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


module.exports.getUserById = function(req, res){

	var query = { uname : 'hhh' };
	//console.log(password);

	// bcrypt.compare(password, hash, function(err, salt) {
	// password = salt;
	// console.log(password);
	// //res.json(result1);
	

	User.find(query, function (err, result1) {
		if(err){
			res.error(err);
		} else  {
			//console.log(result1);
    		res.json(result1);
		}

    });

    // });

}


// =====================================================


//=================================================================