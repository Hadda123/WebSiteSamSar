const mongoose = require('mongoose')
const deepPopulate = ('mongoose-deep-populate');

const reclamationSchema = new mongoose.Schema({



 raison: {type: String},
 user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 annonce:{type: mongoose.Schema.Types.ObjectId, ref: 'Annonce'},
 dateCreation: {type: Date},

})





module.exports =mongoose.model('Reclamation', reclamationSchema)
