var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Create Booking Schema
var BookingSchema = mongoose.Schema({
	booking: {
        type: String,
        index: true
    }
});


// Export the model schema
var Booking = module.exports = mongoose.model('Booking', BookingSchema);