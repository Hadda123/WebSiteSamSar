const express = require('express')
const { getAllUser, deleteOneUserById, updateOneUserById,addNewUser, getOneUser,sendSMS,verifySMS, connectUser} = require('../controllers/user.controller')

const router = express()

//2 autre étapes
//send SMS
router.post('/sendsms', sendSMS)
//Verify code sms
router.post('/verifycodesms', verifySMS)
// add new user
router.post('/create', addNewUser)

// connect user
router.post('/connect', connectUser)
// get all user
router.get('/',getAllUser)

// get one user
router.get('/search/:id',getOneUser)
// update one user
router.put('/update/:id',updateOneUserById)
//  delete one user
router.delete('/delete/:id',deleteOneUserById)


module.exports = router


