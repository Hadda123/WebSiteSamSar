

const upload = require("../config/upload");
const express = require('express')

const { getAllAnnonce, deleteOneAnnonceById, updateOneAnnonceById, addNewAnnonce, getOneAnnonce } = require('../controllers/annonce.controller')

const router = express()

// add new annonce
router.post('/create', upload.array('searchImg'),addNewAnnonce)
// get all annonce
router.get('/',getAllAnnonce)


// get one annonce
router.get('/search/:id',getOneAnnonce)
// update one annonce
router.put('/update/:id',updateOneAnnonceById)
//  delete one annonce
router.delete('/delete/:id',deleteOneAnnonceById)
module.exports = router