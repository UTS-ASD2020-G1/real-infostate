const userRouter = require('express').Router();
let User = require('../models/user');

userRouter.route('/').get( async (req, res, next) => {
  const users = await User.find({}).populate('posts', {title: 1, content: 1, category: 1})
  res.json(users);
    // .then(users => res.json(users)) 
    // // .then(users => res.json(users.map(user => user.toJSON())))
    // .catch(error => next(error))
});
module.exports = userRouter