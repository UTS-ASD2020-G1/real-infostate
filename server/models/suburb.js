const mongoose = require('mongoose')

const suburbSchema = new mongoose.Schema({
    transportRate: { type: Number },
    satisfactionRate: { type: Number },
    parkingRate: { type: Number },
    atarAverage: { type: Number },
    crimeRate: { type: Number },
    averagePropertyCost: { type: Number },
    description: { type: String },
    name: { type: String }
  });

suburbSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // password should not be revealed
    delete returnedObject.password 
  }
})

module.exports = mongoose.model('suburb', suburbSchema)