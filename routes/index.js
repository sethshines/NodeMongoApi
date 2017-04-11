var express = require('express');
var router = express.Router();
var users = require('./users');
var login = require('./login');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Api' });
});

router.use('/users', users);
router.use('/login', login);

module.exports = router;