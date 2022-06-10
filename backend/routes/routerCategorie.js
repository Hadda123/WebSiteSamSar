const express = require('express')
const { getAllCategorie, deleteOneCategorieById, updateOneCategorieById,addNewCategorie, getOneCategorie } = require('../controllers/categorie.controller')

const router = express()

// add new immopilier
router.post('/create', addNewCategorie)
// get all categorie
router.get('/',getAllCategorie)

// get one categorie
router.get('/search/:id',getOneCategorie)
// update one categorie
router.put('/update/:id',updateOneCategorieById)
//  delete one categorie
router.delete('/delete/:id',deleteOneCategorieById)
module.exports = router


