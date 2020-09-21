const propertyRouter = require('express').Router();
let Property = require('../models/property');


propertyRouter.route('/').get(async (req, res, next) => {
    const properties = await Property.find({})
    res.json(properties);
  });
  

  module.exports = propertyRouter;
