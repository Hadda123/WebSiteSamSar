const express = require('express')
const { getAllDelegation, deleteOneDelegationById, updateOneDelegationById,addNewDelegation, getOneDelegation } = require('../controllers/delegation.controller')

const router = express()

// add new Delegation
router.post('/create', addNewDelegation)
// get all Delegation
router.get('/',getAllDelegation)

// get one Delegation
router.get('/search/:id',getOneDelegation)
// update one Delegation
router.put('/update/:id',updateOneDelegationById)
//  delete one Delegation
router.delete('/delete/:id',deleteOneDelegationById)
module.exports = router


