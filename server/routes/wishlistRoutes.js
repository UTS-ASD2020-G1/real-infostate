const { check, validationResult } = require('express-validator');
let User = require('../models/user');
let Property = require('../models/property');
const wishlistRouter = require('express').Router();

wishlistRouter.route('/').get(async (req, res, next) => {
  res.status(200).json('This route is working');
});

module.exports = wishlistRouter;
