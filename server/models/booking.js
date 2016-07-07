var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Create User Schema
var BookingSchema = mongoose.Schema({
	booking: {
        type: String,
        index: true
    }
});


// Export the model schema
var Booking = module.exports = mongoose.model('Booking', BookingSchema);