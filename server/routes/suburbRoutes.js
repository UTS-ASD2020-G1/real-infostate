const suburbRouter = require('express').Router();
let Suburb = require('../models/suburb');


suburbRouter.route('/').get(async (req, res, next) => {
    const suburbs = await Suburb.find({})
    res.json(suburbs);
  });
  

  module.exports = suburbRouter;
