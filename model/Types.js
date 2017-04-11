var mongoose = require('mongoose');

// Creating User Schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  'first_name': String,
  'last_name': String,
  'age': Number,
  'email': String,
  'phone': String  
});

module.exports = mongoose.model('Type', UserSchema);