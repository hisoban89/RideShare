var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');


// module.exports = mongoose.model('User', {
//   fname: String,
//   lname: String,
//   uname: String,
//   password: String
// });

// Create User Schema
var UserSchema = mongoose.Schema({
	fname: {
        type: String,
        index: true
    },
    lname: {
        type: String,
        index: true
    },
    uname: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
    hash: String,
    salt: String
});

// Export the model schema
var User = module.exports = mongoose.model('User', UserSchema);

User.getUserById = function(id, result){
    User.findById(id, result);
}