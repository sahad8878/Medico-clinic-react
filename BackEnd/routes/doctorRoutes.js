const express = require('express');
const { doctorSignup } = require('../controller/authController');

// route object
const router = express.Router();

// routes

// Admin Login || post
router.post('/doctorSignup', doctorSignup);

module.exports = router;
