var User = require('../models/user');
var usersController   = require('./users-controller');

var express  = require('express');
var app      = express();
var bcrypt   = require('bcryptjs');


module.exports.login = function (req, res){
    User.find(req.body, function (err, results){
        if (err){
            console.log("Error Out");
        }      
        if (results && results.length === 1){

            var userData = results[0];
            res.json({uname: req.body.uname,
                      _id: userData._id
                    });
        } else { 
            console.log('Wrong username or password!!');
        }
    });
}