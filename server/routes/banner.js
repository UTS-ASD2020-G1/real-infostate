const Banner = require('../models/banner');
const BannterRouter = require('express').Router();


BannterRouter.route('/').get(async (req, res, next) => {
    const banners = await Banner.find({}) 
    res.status(200).json(banners); 
  });
  
  module.exports = BannterRouter;
