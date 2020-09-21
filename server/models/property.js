const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    price: { type: Number },
    size: { type: Number },
    coordinate: { type: String },
    type: { type: String },
    address: { type: String },
    description: { type: String },
    name: { type: String },
    url: { type: String }
  });

propertySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // password should not be revealed
    delete returnedObject.password 
  }
})

module.exports = mongoose.model('Property', propertySchema)