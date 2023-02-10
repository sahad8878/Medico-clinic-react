const express = require('express')
const {adminLogin} = require('../controller/authController') 

// route object
const router = express.Router()

// routes

//Admin Login || post
router.post('/admin',adminLogin)



module.exports = router