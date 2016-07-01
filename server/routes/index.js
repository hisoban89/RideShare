var express = require('express');
var router = express.Router();


//Index Page
router.get('/', function (req, res) {
    res.sendfile(appRoot + '/client/views/index.html');
});

// router.get('/users/map', ensureAuthenticated, function (req, res) {
//     res.sendfile(appRoot + '/client/views/map.html');
// });


// function ensureAuthenticated(req, res, next){
// 	if(req.isAuthenticated()){
// 		return next();
// 	} else {
// 		//req.flash('error_msg','You are not logged in');
// 		res.redirect('/users/login');
// 	}
// }

module.exports = router;