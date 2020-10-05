const { check, validationResult } = require('express-validator');
let User = require('../models/user');
let Wishlist = require('../models/wishlist');
let Property = require('../models/property');
const { route } = require('./userRoutes');
const wishlistRouter = require('express').Router();

//@route  CREATE wishlist /wishlist/add/
//@desc   delete profile experience
//@access Private

wishlistRouter.put(
  '/add',
  [
    check('user_id', 'Your must be a user to create a wishlist')
      .not()
      .isEmpty(),
    check('property_id', 'enter the property you want to add to your wishlist')
      .not()
      .isEmpty(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user_id, property_id } = req.body;

    const wishlistFields = {};
    if (user_id) wishlistFields.user_id = user_id;
    if (property_id) wishlistFields.property_id = property_id;

    try {
      let user = await User.findById({ _id: user_id });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User does not exist' }] });
      }
      let property = await Property.findById({ _id: property_id });
      if (!property) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Property does not exist' }] });
      }

      let wishlist = await Wishlist.findOne({
        user_id: user_id,
        property_id: property_id,
      });
      if (wishlist) {
        return res.status(400).json({
          errors: [{ msg: 'Property already added to wishlist before' }],
        });
      }

      wishlist = new Wishlist(wishlistFields);
      await wishlist.save();
    } catch (err) {
      //error message produced by server and recorded for err variable
      console.error(err.message);
      //500 = internal Server Error
      res.status(500).send('Server Error');
    }
    res.status(200).json(wishlistFields);
  }
);

//@route  wishlist /wishlist/view/
//@desc   view wishlist

wishlistRouter.get('/view/:user_id', async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      user_id: req.params.user_id,
    }).populate('property_id', [
      'name',
      'coordinate',
      'description',
      'address',
      'price',
      'price',
      'size',
      'type',
      'url',
    ]);
    if (!wishlist) {
      return res.status(400).json({ msg: 'Wishlist not found' });
    }
    res.json(wishlist);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Wishlist not found' });
    }
    res.status(500).send('Server Error');
  }
});

//@route  wishlist /wishlist/view/
//@desc   view wishlist

module.exports = wishlistRouter;
