var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    expressValidator  = require('express-validator'),
  	flash 			      = require('connect-flash'),
  	session 		      = require('express-session'),
  	passport 		      = require('passport'),
  	LocalStrategy 	  = require('passport-local').Strategy,
    usersController   = require('./server/controllers/users-controller'),
    authenticationController = require('./server/controllers/authentication-controller');
    bookingController = require('./server/controllers/booking-controller');

    var path   = require('path');
    var routes = require('./server/routes/index');
    var users  = require('./server/routes/users');
    var cookieParser = require('cookie-parser');

    var User = require('./server/models/user');

mongoose.connect('mongodb://localhost:27017/ride-share');

//app.use(bodyParser());
app.use(bodyParser.json());




// ==================================
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// ====================================




// Index Page
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

// Register Page
app.get('/register', function (req, res) {
  res.sendfile(__dirname + '/client/views/register.html');
});

// Login Page
app.get('/login', function (req, res) {
  res.sendfile(__dirname + '/client/views/login.html');
});

// Map Page
app.get('/map', function (req, res) {
  res.sendfile(__dirname + '/client/views/map.html');
});


// ============================================



// ============================================


app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/images', express.static(__dirname + '/client/images'));


//REST API
app.post('/api/user/login', authenticationController.login);
app.get('/api/users', usersController.getUserById);
app.post('/api/users', usersController.create);
app.post('/api/bookings', bookingController.booking);

// app.get('/api/usersid', user.getUserById);



// Port
app.listen(5000, function() {
  console.log('I\'m Listening...');
})