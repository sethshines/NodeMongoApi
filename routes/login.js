var express = require('express');
var router = express.Router();
var model = require('../model');

router.post('/', function(req, res, next) {
  if(req.body && req.body.username && req.body.password){
    model
    .User
    .findOne({'Username':req.body.username,'Password':req.body.password})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    })
  }
});


module.exports = router;
