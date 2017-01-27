
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home');
};

exports.contact = function(req, res) {
  res.render('contact');
};

/* OLD from this morning

const express = require('express');
const router = express.Router();
// const models = require('../models');

router.get('/', (req, res, next) => {
	res.render('home');
});

//
// GET home page.
//

// exports.index = function(req, res){
//   res.render('home');
// };

// exports.contact = function(req, res) {
//   res.render('contact');
// };

module.exports = router; */