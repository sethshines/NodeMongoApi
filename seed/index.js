var mongoose = require('mongoose');
var models = require('../model');

mongoose.connect('mongodb://127.0.0.1:27017/test');

// Create a User
models.User.insertMany([{
  'first_name': 'Rahul',
  'last_name': 'Seth',
  'age': 24,
  'email': 'sethshines@gmail.com',
  'phone': '8872220616',
  'Username': 'Rahul_Seth',
  'Password': '8872220616'
}])

