const mongoose = require('mongoose');
const WishlistSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  property_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
  },
});

module.exports = Wishlist = mongoose.model('Wishlist', WishlistSchema);
