const mongoose = require('mongoose')

const deepPopulate = ('mongoose-deep-populate');
const gouvernoratSchema = new mongoose.Schema({



 nom: {
    type: String,
    required: true
  },
  user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},

 
  
})
module.exports =mongoose.model('Gouvernorat', gouvernoratSchema)
