var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    passport 		      = require('passport'),
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

mongoose.connect('mongodb://localhost:27017/ride-share');

//app.use(bodyParser());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

// ==================================
// app.use('/', routes);
// app.use('/users', users);

// // Set Static Folder
// app.use(express.static(path.join(__dirname, 'client')));
// app.use(express.static('client'));

// global.appRoot = path.resolve(__dirname);

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



// =====================================================================

// // BodyParser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Express Session
// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }));


// // Passport init
// app.use(passport.initialize());
// app.use(passport.session());

// // Express Validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//       var namespace = param.split('.')
//       , root    = namespace.shift()
//       , formParam = root;

//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));

// // Connect Flash
// app.use(flash());

// // Global Vars
// app.use(function (req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.user = req.user || null;
//     next();
// });


// ===========================================================================

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/images', express.static(__dirname + '/client/images'));

//Authentication
app.post('/api/user/login', authenticationController.login);

//REST API
// app.get('/api/userss', users.getUserById);
app.get('/api/users', usersController.getUserById);
app.post('/api/users', usersController.create);
app.post('/api/bookings', bookingController.booking);
// app.get('/api/users/get', usersController.getUsers);
// app.get('/api/users/', usersController.getUserById);


// Port
app.listen(5000, function() {
  console.log('I\'m Listening...');
})