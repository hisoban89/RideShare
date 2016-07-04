var User = require('../models/user');
var usersController   = require('./users-controller');

var express  = require('express');
var app      = express();
var bcrypt   = require('bcryptjs');

// module.exports.signup = function (req, res){
//     var user = new User(req.body);
//     user.save();
    
//     res.json(req.body);
// }

module.exports.login = function (req, res){
    User.find(req.body, function (err, results){
        if (err){
            console.log("Error Out");
        }      
        
        if (results && results.length === 1){

            var userData = results[0];
            // console.log(userData.password);
            res.json({uname: req.body.uname,
                      _id: userData._id
                    });
        } else {   
            console.log('Wrong username or password!!');
        }
    });


    // module.exports.comparePassword = function (req, res){
    // // User.find(req.body, function (err, results){
    // //     if (err){
    // //         console.log("Error Out");
    // //     }
    // bcrypt.compare(candidatePassword, hash, function(err, results) {
    // // if(err) throw err;
    // //     callback(null, isMatch);
    // // });

    // var userData = results[0];

    //     console.log(userData);
    //     res.json({uname: req.body.uname,
    //               _id: userData._id
    //         });
    // }




    //
    // User.getUserByUsername(uname, function(err, user){
    //         if(err) throw err;
    //         if(!user){
    //             return done(null, false, {message: 'Unknown User'});
    //         }

    //         User.comparePassword(password, user.password, function(err, isMatch){
    //             if(err) throw err;
    //             if(isMatch){
    //                 return done(null, user);
    //             } else {
    //                 return done(null, false, {message: 'Invalid password'});
    //             }
    //         });
    //     });
    //
}