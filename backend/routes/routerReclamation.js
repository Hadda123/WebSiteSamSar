const express = require('express')
const { getAllReclamation, deleteOneReclamationById, updateOneReclamationById,addNewReclamation, getOneReclamation } = require('../controllers/reclamation.controller')


const router = express()

// add new Reclamation
router.post('/create', addNewReclamation)
// get all Reclamation
router.get('/',getAllReclamation)

// get one Reclamation
router.get('/search/:id',getOneReclamation)
// update one Reclamation
router.put('/update/:id',updateOneReclamationById)
//  delete one Reclamation
router.delete('/delete/:id',deleteOneReclamationById)
module.exports = router


