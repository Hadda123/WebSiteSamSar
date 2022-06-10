const mongoose = require('mongoose')



const deepPopulate = ('mongoose-deep-populate');
const delegationSchema = new mongoose.Schema({



nom: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  gouvernorat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gouvernorat'
  },
  
})
module.exports =mongoose.model('Delegation', delegationSchema)
