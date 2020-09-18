const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let User = require('../models/user');
const {check, validationResult } = require('express-validator/check');

userRouter.route('/').get( async (req, res, next) => {
  const users = await User.find({}).populate('posts', {title: 1, content: 1, category: 1})
  res.json(users);
    // .then(users => res.json(users)) 
    // // .then(users => res.json(users.map(user => user.toJSON())))
    // .catch(error => next(error))
});

userRouter.post('/create', [
  check('firstName', 'Please enter your fistname').not().isEmpty(),
  check('username', 'Please create a username').not().isEmpty(),
  check('email', 'Please enter a valid email address').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({min:6})
],async (req, res) => {
  //Saves all the errors into "errors array"
  const errors = validationResult(req);
  //If the "errors" array is NOT empty than there is a validation error
  if(!errors.isEmpty()){
      //400 = bad request and display the errors
      return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, username, password, address, email } = req.body

  const userFields = {};
  if(username) userFields.username = username;
  if(firstName) userFields.firstName = firstName;
  if(lastName) userFields.lastName = lastName;
  if(address) userFields.address = address;
  if(password) userFields.password = password;
  if(email) userFields.email = email;

  try{
    let user = await User.findOne({ username });

    if(user){
      return res.status(400).json({ errors: [{msg: 'User already exist' }] });
    }

    user = new User(userFields);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    return res.json(user);


  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

//@TODO: get current user
//@ISSUE: need to get current userID from login Token
userRouter.get('/me', async (req, res) => {
  try{
      const user = await User.findOne({ user: req.user.id }).populate('user', 
          ['firstName', 'lastName', 'email', 'address']
      );

      if(!user){
          res.status(400).json({ msg: 'There is no profile for this user'});
      }

      res.json(user);
  }catch(err){
      console.error(err.message);
      res.status(500).send('Server Error');
  }

});

module.exports = userRouter