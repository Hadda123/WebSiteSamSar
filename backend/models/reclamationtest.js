const mongoose = require('mongoose')
const reclamationSchema = new mongoose.Schema({




  titre:{
    type: String,
    required: false
  },
   descrption: {
    type: String,
    required: false
  },
 image: {
    type: String,
    required: false
  },
  DataTransfer: {
    type: String,
    required: false
  }
})
module.exports =mongoose.model('Reclamation', reclamationSchema)
