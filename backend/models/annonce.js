
const mongoose = require('mongoose')
const { Schema } = mongoose;

const deepPopulate = ('mongoose-deep-populate');
const annonceSchema = new mongoose.Schema({
transaction: {
  type: String,
  required:false
},
  titre: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  prix: {
    type: String,
    required: false
  },
  metrage: {
    type: String,
    required: false
  },

  surfacehabitable: {
    type: String,
    required: false
  },
  surfaceterrain: {
    type: String,
    required: false
  },
  dateconstruction: {
    type: String,
    required: false
  },
  sallebain: {
    type: String,
    required: false
  },
  chambre: {
    type: String,
    required: false
  },
  piece: {
    type: String,
    required: false
  },

  nbreEtage: {
    type: String,
    required: false
  },
  SearchImg: {
    type: String
  },
positionMap : {
  type: String,
  required: false
},
  
 categorie:{type: mongoose.Schema.Types.ObjectId, ref: 'Categorie'},
 gouvernorat:{type: mongoose.Schema.Types.ObjectId, ref: 'Gouvernorat'},
 delegation:{type: mongoose.Schema.Types.ObjectId, ref: 'Delegation'},
 user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 dateCreation: {type: Date},

})

module.exports = mongoose.model('Annonce', annonceSchema)