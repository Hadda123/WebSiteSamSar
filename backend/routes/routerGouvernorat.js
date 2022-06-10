const express = require('express')
const { getAllGouvernorat, deleteOneGouvernoratById, updateOneGouvernoratById,addNewGouvernorat, getOneGouvernorat } = require('../controllers/gouvernorat.controller')

const router = express()

// add new Gouvernorat
router.post('/create', addNewGouvernorat)
// get all Gouvernorat
router.get('/',getAllGouvernorat)

// get one Gouvernorat
router.get('/search/:id',getOneGouvernorat)
// update one Gouvernorat
router.put('/update/:id',updateOneGouvernoratById)
//  delete one Gouvernorat
router.delete('/delete/:id',deleteOneGouvernoratById)
module.exports = router


