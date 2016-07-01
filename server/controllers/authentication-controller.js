var User = require('../models/user');

var express           = require('express');
var app          = express();

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
            res.json({uname: req.body.uname,
                      _id: userData._id
                    });
        } else {   
            console.log('Wrong username or password!!');
        }
    })
}