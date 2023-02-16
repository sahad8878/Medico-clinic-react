const express = require('express');
const { doctorSignup} = require('../controller/authController');
const {doctorDetails} = require('../controller/doctorController')

// route object
const router = express.Router();

// routes

// Doctor Signup || post
router.post('/doctorSignup', doctorSignup);

// Doctor Detailsl || post

router.post('/doctorDetails',doctorDetails)


module.exports = router;
