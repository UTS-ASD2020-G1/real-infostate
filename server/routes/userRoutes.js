const bcrypt = require('bcryptjs'); // encryption
const { check, validationResult } = require('express-validator');

let User = require('../models/user');
const userRouter = require('express').Router();

// GET: get all registered users
userRouter.route('/').get(async (req, res, next) => {
  const users = await User.find({}) // find all users
  res.status(200).json(users); // return those users
});

// POST: register new user
userRouter.post(
'/create',
  [
    check('firstName', 'Please enter your fistname').not().isEmpty(), // check if firstName is empty
    check('username', 'Please create a username').not().isEmpty(), // check if username is empty
    check('email', 'Please enter a valid email address').isEmail(), // check if email is valid
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }), // check if password is less than 6 characters
  ],
  async (req, res) => {
    // saves all the errors into "errors array"
    const errors = validationResult(req);
    // if the "errors" array is NOT empty than there is a validation error
    if (!errors.isEmpty()) {
      // return 400 (bad request and display the errors)
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, username, password, address, email } = req.body; // object destructuring
    const userFields = {};

      if (username) userFields.username = username;
      if (firstName) userFields.firstName = firstName;
      if (lastName) userFields.lastName = lastName;
      if (address) userFields.address = address;
      if (password) userFields.password = password;
      if (email) userFields.email = email;

    try {
      // find user with corresponding username
      let user = await User.findOne({ username });

      // if found the same return 400: user already exist
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exist' }] });
      }

      // else create that new user 
      user = new User(userFields);

      // generate salt and hash the password with bcrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // create new user
      await user.save();
      return res.status(200).json(user);
    } catch (err) {
      // if operations failed send error message
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// GET: get specific user as an user
userRouter.get('/read', async (req, res) => {
  const body = req.body;

  try {
    // find user with the corresponding id
    const user = await User.findOne({ _id: body.id }).populate('user', [
      'firstName',
      'lastName',
      'email',
      'address',
    ]);

    // if not found return feedback to user
    if (!user) {
      res.status(400).json({ msg: 'There is no profile for this user' });
    }
    // else return that user object
    res.status(200).json(user);
  } catch (err) {

    // if operation error return feedback
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// DELETE: delete the specific user
userRouter.delete('/delete', async (req, res) => {
  const body = req.body;

  try {
    // delete user by that specific id
    await User.findByIdAndDelete(body.id);

    // return feedback to user
    res.status(200).json({ msg: 'The profile has been deleted' });
  } catch (err) {
    // if operation error return feedback
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// PUT: update the specific user
userRouter.put("/update/:id", async (req, res) => {

  // user object
  const user = {
    firstName: req.body.firstName, 
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address
  }

  User.findByIdAndUpdate(req.params.id, { $set: { user } }, { new: true })
  .then((updatedUser) => {
    // return the updated user object if succeed
    res.status(200).json(updatedUser.toJSON);
})
.catch((error) => {
  // if operation error return feedback
  console.log(error);
  res.status(500).json({ error:"Something wrong"});
  });
});
 
module.exports = userRouter;
