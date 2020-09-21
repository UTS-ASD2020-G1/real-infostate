const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let User = require('../models/user');
const { check, validationResult } = require('express-validator');

userRouter.route('/').get(async (req, res, next) => {
  const users = await User.find({}).populate('posts', {
    title: 1,
    content: 1,
    category: 1,
  });
  res.json(users);
  // .then(users => res.json(users))
  // // .then(users => res.json(users.map(user => user.toJSON())))
  // .catch(error => next(error))
});

userRouter.post(
  '/create',
  [
    check('firstName', 'Please enter your fistname').not().isEmpty(),
    check('username', 'Please create a username').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    //Saves all the errors into "errors array"
    const errors = validationResult(req);
    //If the "errors" array is NOT empty than there is a validation error
    if (!errors.isEmpty()) {
      //400 = bad request and display the errors
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      username,
      password,
      address,
      email,
    } = req.body;

    const userFields = {};
    if (username) userFields.username = username;
    if (firstName) userFields.firstName = firstName;
    if (lastName) userFields.lastName = lastName;
    if (address) userFields.address = address;
    if (password) userFields.password = password;
    if (email) userFields.email = email;

    try {
      let user = await User.findOne({ username });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
      }

      user = new User(userFields);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      return res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@TODO: get current user
//@ISSUE: need to get current userID from login Token
//@FIXED
userRouter.get('/me', async (req, res) => {
  const body = req.body;

  try {
    const user = await User.findOne({ _id: body.id }).populate('user', [
      'firstName',
      'lastName',
      'email',
      'address',
    ]);

    if (!user) {
      res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

userRouter.delete('/delete', async (req, res) => {
  const body = req.body;

  try {
    const user = await User.findByIdAndRemove(body.id);

    res.status(200).json({ msg: 'The profile has been deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

userRouter.put('/update/:id', async (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body.user }, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser.toJSON());
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: 'Something Wrong',
      });
    });
});

module.exports = userRouter;
