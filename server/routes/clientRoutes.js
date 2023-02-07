
const express=require('express')
const { loginController, signupController } = require('../controller/authController')

// router object
const router=express.Router()

// routes
// LOGIN || POST
router.post('/clientLogin',loginController)

// SIGNUP || POST
router.post('/clientSignup',signupController)


module.exports=router