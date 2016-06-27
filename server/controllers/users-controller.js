var User = require('../models/user');

var passport = require('passport');

module.exports.create = function (req, res) {
  var user = new User(req.body);
  user.save(function (err, result) {
    res.json(result);
  });
}

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

//
// passport.use(new LocalStrategy(
//   function(username, password, done) {

//   // Find the user by username.  If there is no user with the given
//   // username, or the password is not correct, set the user to `false` to
//   // indicate failure and set a flash message.  Otherwise, return the
//   // authenticated `user`.

//   findByUsername(username, function(err, user) {
//       if (err) { return done(err); }
// 	    	if (!user) { 
// 	        	return done(null, false, { message: 'Unknown user ' + username }); 
// 	        }
//       if (user.password != password) { 
//           return done(null, false, { message: 'Invalid password' }); 
//       }
//       return done(null, user);
//       })

//     }));

//