const mongoose = require('mongoose');
const WishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  properties: [
    {
      property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
      },
    },
  ],
});

module.exports = Wishlist = mongoose.model('profile', WishlistSchema);
