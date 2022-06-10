const express = require('express')
const { getAllCommentaire, deleteOneCommentaireById, updateOneCommentaireById,addNewCommentaire, getOneCommentaire } = require('../controllers/commentaire.controller')

const router = express()

// add new immopilier
router.post('/create', addNewCommentaire)
// get all commentaire
router.get('/',getAllCommentaire)

// get one commentaire
router.get('/search/:id',getOneCommentaire)
// update one commentaire
router.put('/update/:id',updateOneCommentaireById)
//  delete one commentaire
router.delete('/delete/:id',deleteOneCommentaireById)
module.exports = router


