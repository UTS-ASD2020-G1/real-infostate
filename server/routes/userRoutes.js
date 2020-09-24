const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let User = require('../models/user');
const { check, validationResult } = require('express-validator/check');
const { update } = require('../models/user');

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

//Create User Route
userRouter.post(
  '/create',
  [
    //Check and validate fields
    //Check firstName is not empty, if not give appropriate response
    check('firstName', 'Please enter your fistname').not().isEmpty(),
    //Check username is not empty, if not give appropriate response
    check('username', 'Please create a username').not().isEmpty(),
    //Check if it's a valid email address, if not give appropriate response
    check('email', 'Please enter a valid email address').isEmail(),
    //Check if the password is more than 6 characters long, if not give appropriate response
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

    //Get the fields from the request body
    const {
      firstName,
      lastName,
      username,
      password,
      address,
      email,
    } = req.body;

    //Store in userfields variable if the field exist
    const userFields = {};
    //if there is a username store it as username is userFields
    if (username) userFields.username = username;
    //if there is a firstName store it as firstName is userFields
    if (firstName) userFields.firstName = firstName;
    //if there is a lastName store it as lastName is userFields
    if (lastName) userFields.lastName = lastName;
    //if there is a address store it as address is userFields
    if (address) userFields.address = address;
    //if there is a password store it as password is userFields
    if (password) userFields.password = password;
    //if there is a email store it as email is userFields
    if (email) userFields.email = email;

    try {
      //check if there is a user with the inputed username
      let user = await User.findOne({ username });

      //Don ot make if username exist and give appropriate response
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
      }

      //Create User object with userFields as attributes
      user = new User(userFields);
      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //Save User object to database
      await user.save();
      //Return the user details
      return res.json(user);
    } catch (err) {
      //Catch error and display err paramater
      console.error(err.message);
      //Send status 500 it there is an error
      res.status(500).send('Server Error');
    }
  }
);

//@TODO: get current user
//@ISSUE: need to get current userID from login Token
//@FIXED
userRouter.get('/read', async (req, res) => {
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
    const user = await User.findByIdAndDelete(body.id);

    res.json({ msg: 'The profile has been deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

userRouter.put('/update/:id', async (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
      },
    },
    { new: true }
  )
    .then((updatedUser) => {
      res.status(200).json(updatedUser.toJSON);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: 'Something wrong',
      });
    });
});

module.exports = userRouter;
