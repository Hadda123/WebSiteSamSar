const mongoose = require('mongoose')
const deepPopulate = ('mongoose-deep-populate');

const commentaireSchema = new mongoose.Schema({



 text: {type: String},
 user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 annonce:{type: mongoose.Schema.Types.ObjectId, ref: 'Annonce'},
 dateCreation: {type: Date},

})





module.exports =mongoose.model('Commentaire', commentaireSchema)
