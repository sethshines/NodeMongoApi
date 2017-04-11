var mongoose = require('mongoose');

// Creating User Schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  'first_name': {type:String,required:true},
  'last_name': {type:String,required:true},
  'age': {type:Number,required:true},
  'email': {type:String,required:true,unique: true},
  'phone': {type:String,required:true},
  'username': {type:String,required:true,unique: true},
  'password': {type:String,required:true}
});

module.exports = mongoose.model('User', UserSchema);