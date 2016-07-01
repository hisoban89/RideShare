var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// Register
//router.get('/register', function(req, res){
//	res.render('/views/register');
//});

// Index Page
router.get('/', function (req, res) {
    res.sendfile(appRoot + '/client/views/index.html');
    //res.render('register');
});

// Register Page
router.get('/register', function (req, res) {
    res.sendfile(appRoot + '/client/views/register.html');
    //res.render('register');
});


// Login Page
router.get('/login', function (req, res) {
    res.sendfile(appRoot + '/client/views/login.html');
});

//Map
router.get('/map', function (req, res) {
    res.sendfile(appRoot + '/client/views/map.html');
});







// User Registration - // Set the properties that came from the POST data
// router.post('/register', function(req, res){
    
//     var fname     = req.body.fname;
//     var lname  	  = req.body.lname;
//     var uname  	  = req.body.uname;
//     var password  = req.body.password;
 
// 	// Validation
// 	req.checkBody('fname', 'Name is required').notEmpty();
// 	req.checkBody('lname', 'Email is required').notEmpty();
// 	//req.checkBody('email', 'Email is not valid').isEmail();
// 	req.checkBody('uname', 'Username is required').notEmpty();
// 	req.checkBody('password', 'Password is required').notEmpty();
// 	//req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

// 	var errors = req.validationErrors();

// 	if(errors){
// 		res.render('register',{
// 			errors:errors
// 		});
// 	} else {
// 		var newUser = new User({
// 			fname: fname,
// 			lname: lname,
// 			uname: uname,
// 			password: password
// 		});

// 		User.createUser(newUser, function(err, user){
// 			if(err) throw err;
// 			console.log(user);
// 		});

// 		req.flash('success_msg', 'You are registered and can now login');

// 		res.redirect('/users/login');
// 	}

// });


// passport.use(new LocalStrategy(
//   	function(uname, password, done) {
//    		User.getUserByUname(username, function(err, user){
// 		   	if(err) throw err;
// 		   	if(!user){
// 		   		return done(null, false, {message: 'Unknown User'});
// 		   	}

// 		   	User.comparePassword(password, user.password, function(err, isMatch){
// 		   		if(err) throw err;
// 		   		if(isMatch){
// 		   			return done(null, user);
// 		   		} else {
// 		   			return done(null, false, {message: 'Invalid password'});
// 		   		}
// 		   	});
//    		});
//   }));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   	User.getUserById(id, function(err, user) {
//     	done(err, user);
//   	});
// });

// router.post('/login',
//   	passport.authenticate('local', {successRedirect:'/users/map', failureRedirect:'/users/login',failureFlash: true}),
//   	function(req, res) {
//     	res.redirect('/');
//   	});

// router.get('/logout', function(req, res){
// 	req.logout();

// 	req.flash('success_msg', 'You are logged out');

// 	res.redirect('/users/login');
// });

module.exports = router;