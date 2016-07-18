var Booking 	  = require('../models/booking');
var express  	  = require('express');
var app  		  = express();
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt 		  = require('bcryptjs');
var mongoose 	  = require('mongoose');

module.exports.booking = function (req, res) {

  var booking = new Booking(req.body);

    booking.save(function (err, result) {
    	res.json(result);
  	});		  	
}