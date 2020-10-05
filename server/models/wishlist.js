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

propertySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = Wishlist = mongoose.model('Wishlist', WishlistSchema);
